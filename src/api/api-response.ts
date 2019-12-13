import { Canceler } from "axios";
import { D2Response } from "./common";

export class D2ApiResponse<Data> {
    constructor(public cancel: Canceler, public response: Promise<D2Response<Data>>) {}

    static build<Data_>({
        cancel,
        response,
    }: {
        cancel?: Canceler;
        response: Promise<D2Response<Data_>>;
    }): D2ApiResponse<Data_> {
        return new D2ApiResponse(cancel || noop, response);
    }

    getData() {
        return this.response.then(({ data }) => data);
    }

    map<MappedData>(mapper: (response: D2Response<Data>) => MappedData): D2ApiResponse<MappedData> {
        const { cancel, response } = this;
        const mappedResponse = response.then(
            (response_: D2Response<Data>): D2Response<MappedData> => ({
                ...response_,
                data: mapper(response_),
            })
        );

        return new D2ApiResponse<MappedData>(cancel, mappedResponse);
    }

    flatMap<MappedData>(
        mapper: (response: D2Response<Data>) => D2ApiResponse<MappedData>
    ): D2ApiResponse<MappedData> {
        const { cancel, response } = this;
        let cancel2: Canceler | undefined;

        const mappedResponse = response.then(response_ => {
            const res2 = mapper(response_);
            cancel2 = res2.cancel;
            return res2.response;
        });

        function cancelAll() {
            cancel();
            if (cancel2) cancel2();
        }

        return new D2ApiResponse<MappedData>(cancelAll, mappedResponse);
    }
}

const noop = () => {};
