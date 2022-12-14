import * as _1 from "./alloc/v1beta1/genesis";
import * as _2 from "./alloc/v1beta1/params";
import * as _3 from "./alloc/v1beta1/query";
import * as _4 from "./alloc/v1beta1/tx";
import * as _5 from "./catdrop/v1beta1/claim_record";
import * as _6 from "./catdrop/v1beta1/genesis";
import * as _7 from "./catdrop/v1beta1/params";
import * as _8 from "./catdrop/v1beta1/query";
import * as _9 from "./catdrop/v1beta1/tx";
import * as _10 from "./mint/v1beta1/genesis";
import * as _11 from "./mint/v1beta1/mint";
import * as _12 from "./mint/v1beta1/query";
import * as _159 from "./alloc/v1beta1/query.rpc.Query";
import * as _160 from "./catdrop/v1beta1/query.rpc.Query";
import * as _161 from "./mint/v1beta1/query.rpc.Query";
import * as _162 from "./alloc/v1beta1/tx.rpc.msg";
import * as _163 from "./catdrop/v1beta1/tx.rpc.msg";
export declare namespace coolcat {
    namespace alloc {
        const v1beta1: {
            MsgClientImpl: typeof _162.MsgClientImpl;
            QueryClientImpl: typeof _159.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _4.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _4.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _4.MsgCreateVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _4.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _4.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _4.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _4.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/coolcat.alloc.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: _4.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        start_time: string;
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, start_time, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        start_time: string;
                        end_time: string;
                        delayed: boolean;
                    }) => _4.MsgCreateVestingAccount;
                };
            };
            MsgCreateVestingAccount: {
                encode(message: _4.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgCreateVestingAccount;
                fromJSON(object: any): _4.MsgCreateVestingAccount;
                toJSON(message: _4.MsgCreateVestingAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: {
                        high?: number;
                        low?: number;
                        unsigned?: boolean;
                        add?: (addend: string | number | import("long")) => import("long");
                        and?: (other: string | number | import("long")) => import("long");
                        compare?: (other: string | number | import("long")) => number;
                        comp?: (other: string | number | import("long")) => number;
                        divide?: (divisor: string | number | import("long")) => import("long");
                        div?: (divisor: string | number | import("long")) => import("long");
                        equals?: (other: string | number | import("long")) => boolean;
                        eq?: (other: string | number | import("long")) => boolean;
                        getHighBits?: () => number;
                        getHighBitsUnsigned?: () => number;
                        getLowBits?: () => number;
                        getLowBitsUnsigned?: () => number;
                        getNumBitsAbs?: () => number;
                        greaterThan?: (other: string | number | import("long")) => boolean;
                        gt?: (other: string | number | import("long")) => boolean;
                        greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                        gte?: (other: string | number | import("long")) => boolean;
                        ge?: (other: string | number | import("long")) => boolean;
                        isEven?: () => boolean;
                        isNegative?: () => boolean;
                        isOdd?: () => boolean;
                        isPositive?: () => boolean;
                        isZero?: () => boolean;
                        eqz?: () => boolean;
                        lessThan?: (other: string | number | import("long")) => boolean;
                        lt?: (other: string | number | import("long")) => boolean;
                        lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                        lte?: (other: string | number | import("long")) => boolean;
                        le?: (other: string | number | import("long")) => boolean;
                        modulo?: (other: string | number | import("long")) => import("long");
                        mod?: (other: string | number | import("long")) => import("long");
                        rem?: (other: string | number | import("long")) => import("long");
                        multiply?: (multiplier: string | number | import("long")) => import("long");
                        mul?: (multiplier: string | number | import("long")) => import("long");
                        negate?: () => import("long");
                        neg?: () => import("long");
                        not?: () => import("long");
                        countLeadingZeros?: () => number;
                        clz?: () => number;
                        countTrailingZeros?: () => number;
                        ctz?: () => number;
                        notEquals?: (other: string | number | import("long")) => boolean;
                        neq?: (other: string | number | import("long")) => boolean;
                        ne?: (other: string | number | import("long")) => boolean;
                        or?: (other: string | number | import("long")) => import("long");
                        shiftLeft?: (numBits: number | import("long")) => import("long");
                        shl?: (numBits: number | import("long")) => import("long");
                        shiftRight?: (numBits: number | import("long")) => import("long");
                        shr?: (numBits: number | import("long")) => import("long");
                        shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                        shru?: (numBits: number | import("long")) => import("long");
                        shr_u?: (numBits: number | import("long")) => import("long");
                        rotateLeft?: (numBits: number | import("long")) => import("long");
                        rotl?: (numBits: number | import("long")) => import("long");
                        rotateRight?: (numBits: number | import("long")) => import("long");
                        rotr?: (numBits: number | import("long")) => import("long");
                        subtract?: (subtrahend: string | number | import("long")) => import("long");
                        sub?: (subtrahend: string | number | import("long")) => import("long");
                        toInt?: () => number;
                        toNumber?: () => number;
                        toBytes?: (le?: boolean) => number[];
                        toBytesLE?: () => number[];
                        toBytesBE?: () => number[];
                        toSigned?: () => import("long");
                        toString?: (radix?: number) => string;
                        toUnsigned?: () => import("long");
                        xor?: (other: string | number | import("long")) => import("long");
                    };
                    endTime?: {
                        high?: number;
                        low?: number;
                        unsigned?: boolean;
                        add?: (addend: string | number | import("long")) => import("long");
                        and?: (other: string | number | import("long")) => import("long");
                        compare?: (other: string | number | import("long")) => number;
                        comp?: (other: string | number | import("long")) => number;
                        divide?: (divisor: string | number | import("long")) => import("long");
                        div?: (divisor: string | number | import("long")) => import("long");
                        equals?: (other: string | number | import("long")) => boolean;
                        eq?: (other: string | number | import("long")) => boolean;
                        getHighBits?: () => number;
                        getHighBitsUnsigned?: () => number;
                        getLowBits?: () => number;
                        getLowBitsUnsigned?: () => number;
                        getNumBitsAbs?: () => number;
                        greaterThan?: (other: string | number | import("long")) => boolean;
                        gt?: (other: string | number | import("long")) => boolean;
                        greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                        gte?: (other: string | number | import("long")) => boolean;
                        ge?: (other: string | number | import("long")) => boolean;
                        isEven?: () => boolean;
                        isNegative?: () => boolean;
                        isOdd?: () => boolean;
                        isPositive?: () => boolean;
                        isZero?: () => boolean;
                        eqz?: () => boolean;
                        lessThan?: (other: string | number | import("long")) => boolean;
                        lt?: (other: string | number | import("long")) => boolean;
                        lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                        lte?: (other: string | number | import("long")) => boolean;
                        le?: (other: string | number | import("long")) => boolean;
                        modulo?: (other: string | number | import("long")) => import("long");
                        mod?: (other: string | number | import("long")) => import("long");
                        rem?: (other: string | number | import("long")) => import("long");
                        multiply?: (multiplier: string | number | import("long")) => import("long");
                        mul?: (multiplier: string | number | import("long")) => import("long");
                        negate?: () => import("long");
                        neg?: () => import("long");
                        not?: () => import("long");
                        countLeadingZeros?: () => number;
                        clz?: () => number;
                        countTrailingZeros?: () => number;
                        ctz?: () => number;
                        notEquals?: (other: string | number | import("long")) => boolean;
                        neq?: (other: string | number | import("long")) => boolean;
                        ne?: (other: string | number | import("long")) => boolean;
                        or?: (other: string | number | import("long")) => import("long");
                        shiftLeft?: (numBits: number | import("long")) => import("long");
                        shl?: (numBits: number | import("long")) => import("long");
                        shiftRight?: (numBits: number | import("long")) => import("long");
                        shr?: (numBits: number | import("long")) => import("long");
                        shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                        shru?: (numBits: number | import("long")) => import("long");
                        shr_u?: (numBits: number | import("long")) => import("long");
                        rotateLeft?: (numBits: number | import("long")) => import("long");
                        rotl?: (numBits: number | import("long")) => import("long");
                        rotateRight?: (numBits: number | import("long")) => import("long");
                        rotr?: (numBits: number | import("long")) => import("long");
                        subtract?: (subtrahend: string | number | import("long")) => import("long");
                        sub?: (subtrahend: string | number | import("long")) => import("long");
                        toInt?: () => number;
                        toNumber?: () => number;
                        toBytes?: (le?: boolean) => number[];
                        toBytesLE?: () => number[];
                        toBytesBE?: () => number[];
                        toSigned?: () => import("long");
                        toString?: (radix?: number) => string;
                        toUnsigned?: () => import("long");
                        xor?: (other: string | number | import("long")) => import("long");
                    };
                    delayed?: boolean;
                }): _4.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _4.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _4.MsgCreateVestingAccountResponse;
                toJSON(_: _4.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: {}): _4.MsgCreateVestingAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _3.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsRequest;
                fromJSON(_: any): _3.QueryParamsRequest;
                toJSON(_: _3.QueryParamsRequest): unknown;
                fromPartial(_: {}): _3.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _3.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsResponse;
                fromJSON(object: any): _3.QueryParamsResponse;
                toJSON(message: _3.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        distributionProportions?: {
                            communityPool?: string;
                        };
                    };
                }): _3.QueryParamsResponse;
            };
            DistributionProportions: {
                encode(message: _2.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.DistributionProportions;
                fromJSON(object: any): _2.DistributionProportions;
                toJSON(message: _2.DistributionProportions): unknown;
                fromPartial(object: {
                    communityPool?: string;
                }): _2.DistributionProportions;
            };
            Params: {
                encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Params;
                fromJSON(object: any): _2.Params;
                toJSON(message: _2.Params): unknown;
                fromPartial(object: {
                    distributionProportions?: {
                        communityPool?: string;
                    };
                }): _2.Params;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GenesisState;
                fromJSON(object: any): _1.GenesisState;
                toJSON(message: _1.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        distributionProportions?: {
                            communityPool?: string;
                        };
                    };
                }): _1.GenesisState;
            };
        };
    }
    namespace catdrop {
        const v1beta1: {
            MsgClientImpl: typeof _163.MsgClientImpl;
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                moduleAccountBalance(request?: _8.QueryModuleAccountBalanceRequest): Promise<_8.QueryModuleAccountBalanceResponse>;
                params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                claimRecord(request: _8.QueryClaimRecordRequest): Promise<_8.QueryClaimRecordResponse>;
                claimableForAction(request: _8.QueryClaimableForActionRequest): Promise<_8.QueryClaimableForActionResponse>;
                totalClaimable(request: _8.QueryTotalClaimableRequest): Promise<_8.QueryTotalClaimableResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claimFor(value: _9.MsgClaimFor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claimFor(value: _9.MsgClaimFor): {
                        typeUrl: string;
                        value: _9.MsgClaimFor;
                    };
                };
                toJSON: {
                    claimFor(value: _9.MsgClaimFor): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    claimFor(value: any): {
                        typeUrl: string;
                        value: _9.MsgClaimFor;
                    };
                };
                fromPartial: {
                    claimFor(value: _9.MsgClaimFor): {
                        typeUrl: string;
                        value: _9.MsgClaimFor;
                    };
                };
            };
            AminoConverter: {
                "/coolcat.catdrop.v1beta1.MsgClaimFor": {
                    aminoType: string;
                    toAmino: ({ sender, address, action }: _9.MsgClaimFor) => {
                        sender: string;
                        address: string;
                        action: number;
                    };
                    fromAmino: ({ sender, address, action }: {
                        sender: string;
                        address: string;
                        action: number;
                    }) => _9.MsgClaimFor;
                };
            };
            MsgClaimFor: {
                encode(message: _9.MsgClaimFor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgClaimFor;
                fromJSON(object: any): _9.MsgClaimFor;
                toJSON(message: _9.MsgClaimFor): unknown;
                fromPartial(object: {
                    sender?: string;
                    address?: string;
                    action?: _5.Action;
                }): _9.MsgClaimFor;
            };
            MsgClaimForResponse: {
                encode(message: _9.MsgClaimForResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgClaimForResponse;
                fromJSON(object: any): _9.MsgClaimForResponse;
                toJSON(message: _9.MsgClaimForResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    claimedAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _9.MsgClaimForResponse;
            };
            QueryModuleAccountBalanceRequest: {
                encode(_: _8.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _8.QueryModuleAccountBalanceRequest;
                toJSON(_: _8.QueryModuleAccountBalanceRequest): unknown;
                fromPartial(_: {}): _8.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _8.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _8.QueryModuleAccountBalanceResponse;
                toJSON(message: _8.QueryModuleAccountBalanceResponse): unknown;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _8.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _8.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryParamsRequest;
                fromJSON(_: any): _8.QueryParamsRequest;
                toJSON(_: _8.QueryParamsRequest): unknown;
                fromPartial(_: {}): _8.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _8.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryParamsResponse;
                fromJSON(object: any): _8.QueryParamsResponse;
                toJSON(message: _8.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        airdropEnabled?: boolean;
                        airdropStartTime?: {
                            seconds?: {
                                high?: number;
                                low?: number;
                                unsigned?: boolean;
                                add?: (addend: string | number | import("long")) => import("long");
                                and?: (other: string | number | import("long")) => import("long");
                                compare?: (other: string | number | import("long")) => number;
                                comp?: (other: string | number | import("long")) => number;
                                divide?: (divisor: string | number | import("long")) => import("long");
                                div?: (divisor: string | number | import("long")) => import("long");
                                equals?: (other: string | number | import("long")) => boolean;
                                eq?: (other: string | number | import("long")) => boolean;
                                getHighBits?: () => number;
                                getHighBitsUnsigned?: () => number;
                                getLowBits?: () => number;
                                getLowBitsUnsigned?: () => number;
                                getNumBitsAbs?: () => number;
                                greaterThan?: (other: string | number | import("long")) => boolean;
                                gt?: (other: string | number | import("long")) => boolean;
                                greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                                gte?: (other: string | number | import("long")) => boolean;
                                ge?: (other: string | number | import("long")) => boolean;
                                isEven?: () => boolean;
                                isNegative?: () => boolean;
                                isOdd?: () => boolean;
                                isPositive?: () => boolean;
                                isZero?: () => boolean;
                                eqz?: () => boolean;
                                lessThan?: (other: string | number | import("long")) => boolean;
                                lt?: (other: string | number | import("long")) => boolean;
                                lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                                lte?: (other: string | number | import("long")) => boolean;
                                le?: (other: string | number | import("long")) => boolean;
                                modulo?: (other: string | number | import("long")) => import("long");
                                mod?: (other: string | number | import("long")) => import("long");
                                rem?: (other: string | number | import("long")) => import("long");
                                multiply?: (multiplier: string | number | import("long")) => import("long");
                                mul?: (multiplier: string | number | import("long")) => import("long");
                                negate?: () => import("long");
                                neg?: () => import("long");
                                not?: () => import("long");
                                countLeadingZeros?: () => number;
                                clz?: () => number;
                                countTrailingZeros?: () => number;
                                ctz?: () => number;
                                notEquals?: (other: string | number | import("long")) => boolean;
                                neq?: (other: string | number | import("long")) => boolean;
                                ne?: (other: string | number | import("long")) => boolean;
                                or?: (other: string | number | import("long")) => import("long");
                                shiftLeft?: (numBits: number | import("long")) => import("long");
                                shl?: (numBits: number | import("long")) => import("long");
                                shiftRight?: (numBits: number | import("long")) => import("long");
                                shr?: (numBits: number | import("long")) => import("long");
                                shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                                shru?: (numBits: number | import("long")) => import("long");
                                shr_u?: (numBits: number | import("long")) => import("long");
                                rotateLeft?: (numBits: number | import("long")) => import("long");
                                rotl?: (numBits: number | import("long")) => import("long");
                                rotateRight?: (numBits: number | import("long")) => import("long");
                                rotr?: (numBits: number | import("long")) => import("long");
                                subtract?: (subtrahend: string | number | import("long")) => import("long");
                                sub?: (subtrahend: string | number | import("long")) => import("long");
                                toInt?: () => number;
                                toNumber?: () => number;
                                toBytes?: (le?: boolean) => number[];
                                toBytesLE?: () => number[];
                                toBytesBE?: () => number[];
                                toSigned?: () => import("long");
                                toString?: (radix?: number) => string;
                                toUnsigned?: () => import("long");
                                xor?: (other: string | number | import("long")) => import("long");
                            };
                            nanos?: number;
                        };
                        durationUntilDecay?: {
                            seconds?: {
                                high?: number;
                                low?: number;
                                unsigned?: boolean;
                                add?: (addend: string | number | import("long")) => import("long");
                                and?: (other: string | number | import("long")) => import("long");
                                compare?: (other: string | number | import("long")) => number;
                                comp?: (other: string | number | import("long")) => number;
                                divide?: (divisor: string | number | import("long")) => import("long");
                                div?: (divisor: string | number | import("long")) => import("long");
                                equals?: (other: string | number | import("long")) => boolean;
                                eq?: (other: string | number | import("long")) => boolean;
                                getHighBits?: () => number;
                                getHighBitsUnsigned?: () => number;
                                getLowBits?: () => number;
                                getLowBitsUnsigned?: () => number;
                                getNumBitsAbs?: () => number;
                                greaterThan?: (other: string | number | import("long")) => boolean;
                                gt?: (other: string | number | import("long")) => boolean;
                                greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                                gte?: (other: string | number | import("long")) => boolean;
                                ge?: (other: string | number | import("long")) => boolean;
                                isEven?: () => boolean;
                                isNegative?: () => boolean;
                                isOdd?: () => boolean;
                                isPositive?: () => boolean;
                                isZero?: () => boolean;
                                eqz?: () => boolean;
                                lessThan?: (other: string | number | import("long")) => boolean;
                                lt?: (other: string | number | import("long")) => boolean;
                                lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                                lte?: (other: string | number | import("long")) => boolean;
                                le?: (other: string | number | import("long")) => boolean;
                                modulo?: (other: string | number | import("long")) => import("long");
                                mod?: (other: string | number | import("long")) => import("long");
                                rem?: (other: string | number | import("long")) => import("long");
                                multiply?: (multiplier: string | number | import("long")) => import("long");
                                mul?: (multiplier: string | number | import("long")) => import("long");
                                negate?: () => import("long");
                                neg?: () => import("long");
                                not?: () => import("long");
                                countLeadingZeros?: () => number;
                                clz?: () => number;
                                countTrailingZeros?: () => number;
                                ctz?: () => number;
                                notEquals?: (other: string | number | import("long")) => boolean;
                                neq?: (other: string | number | import("long")) => boolean;
                                ne?: (other: string | number | import("long")) => boolean;
                                or?: (other: string | number | import("long")) => import("long");
                                shiftLeft?: (numBits: number | import("long")) => import("long");
                                shl?: (numBits: number | import("long")) => import("long");
                                shiftRight?: (numBits: number | import("long")) => import("long");
                                shr?: (numBits: number | import("long")) => import("long");
                                shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                                shru?: (numBits: number | import("long")) => import("long");
                                shr_u?: (numBits: number | import("long")) => import("long");
                                rotateLeft?: (numBits: number | import("long")) => import("long");
                                rotl?: (numBits: number | import("long")) => import("long");
                                rotateRight?: (numBits: number | import("long")) => import("long");
                                rotr?: (numBits: number | import("long")) => import("long");
                                subtract?: (subtrahend: string | number | import("long")) => import("long");
                                sub?: (subtrahend: string | number | import("long")) => import("long");
                                toInt?: () => number;
                                toNumber?: () => number;
                                toBytes?: (le?: boolean) => number[];
                                toBytesLE?: () => number[];
                                toBytesBE?: () => number[];
                                toSigned?: () => import("long");
                                toString?: (radix?: number) => string;
                                toUnsigned?: () => import("long");
                                xor?: (other: string | number | import("long")) => import("long");
                            };
                            nanos?: number;
                        };
                        durationOfDecay?: {
                            seconds?: {
                                high?: number;
                                low?: number;
                                unsigned?: boolean;
                                add?: (addend: string | number | import("long")) => import("long");
                                and?: (other: string | number | import("long")) => import("long");
                                compare?: (other: string | number | import("long")) => number;
                                comp?: (other: string | number | import("long")) => number;
                                divide?: (divisor: string | number | import("long")) => import("long");
                                div?: (divisor: string | number | import("long")) => import("long");
                                equals?: (other: string | number | import("long")) => boolean;
                                eq?: (other: string | number | import("long")) => boolean;
                                getHighBits?: () => number;
                                getHighBitsUnsigned?: () => number;
                                getLowBits?: () => number;
                                getLowBitsUnsigned?: () => number;
                                getNumBitsAbs?: () => number;
                                greaterThan?: (other: string | number | import("long")) => boolean;
                                gt?: (other: string | number | import("long")) => boolean;
                                greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                                gte?: (other: string | number | import("long")) => boolean;
                                ge?: (other: string | number | import("long")) => boolean;
                                isEven?: () => boolean;
                                isNegative?: () => boolean;
                                isOdd?: () => boolean;
                                isPositive?: () => boolean;
                                isZero?: () => boolean;
                                eqz?: () => boolean;
                                lessThan?: (other: string | number | import("long")) => boolean;
                                lt?: (other: string | number | import("long")) => boolean;
                                lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                                lte?: (other: string | number | import("long")) => boolean;
                                le?: (other: string | number | import("long")) => boolean;
                                modulo?: (other: string | number | import("long")) => import("long");
                                mod?: (other: string | number | import("long")) => import("long");
                                rem?: (other: string | number | import("long")) => import("long");
                                multiply?: (multiplier: string | number | import("long")) => import("long");
                                mul?: (multiplier: string | number | import("long")) => import("long");
                                negate?: () => import("long");
                                neg?: () => import("long");
                                not?: () => import("long");
                                countLeadingZeros?: () => number;
                                clz?: () => number;
                                countTrailingZeros?: () => number;
                                ctz?: () => number;
                                notEquals?: (other: string | number | import("long")) => boolean;
                                neq?: (other: string | number | import("long")) => boolean;
                                ne?: (other: string | number | import("long")) => boolean;
                                or?: (other: string | number | import("long")) => import("long");
                                shiftLeft?: (numBits: number | import("long")) => import("long");
                                shl?: (numBits: number | import("long")) => import("long");
                                shiftRight?: (numBits: number | import("long")) => import("long");
                                shr?: (numBits: number | import("long")) => import("long");
                                shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                                shru?: (numBits: number | import("long")) => import("long");
                                shr_u?: (numBits: number | import("long")) => import("long");
                                rotateLeft?: (numBits: number | import("long")) => import("long");
                                rotl?: (numBits: number | import("long")) => import("long");
                                rotateRight?: (numBits: number | import("long")) => import("long");
                                rotr?: (numBits: number | import("long")) => import("long");
                                subtract?: (subtrahend: string | number | import("long")) => import("long");
                                sub?: (subtrahend: string | number | import("long")) => import("long");
                                toInt?: () => number;
                                toNumber?: () => number;
                                toBytes?: (le?: boolean) => number[];
                                toBytesLE?: () => number[];
                                toBytesBE?: () => number[];
                                toSigned?: () => import("long");
                                toString?: (radix?: number) => string;
                                toUnsigned?: () => import("long");
                                xor?: (other: string | number | import("long")) => import("long");
                            };
                            nanos?: number;
                        };
                        claimDenom?: string;
                        allowedClaimers?: {
                            contractAddress?: string;
                            action?: _5.Action;
                        }[];
                    };
                }): _8.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _8.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryClaimRecordRequest;
                fromJSON(object: any): _8.QueryClaimRecordRequest;
                toJSON(message: _8.QueryClaimRecordRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _8.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _8.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryClaimRecordResponse;
                fromJSON(object: any): _8.QueryClaimRecordResponse;
                toJSON(message: _8.QueryClaimRecordResponse): unknown;
                fromPartial(object: {
                    claimRecord?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    };
                }): _8.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _8.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryClaimableForActionRequest;
                fromJSON(object: any): _8.QueryClaimableForActionRequest;
                toJSON(message: _8.QueryClaimableForActionRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    action?: _5.Action;
                }): _8.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _8.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryClaimableForActionResponse;
                fromJSON(object: any): _8.QueryClaimableForActionResponse;
                toJSON(message: _8.QueryClaimableForActionResponse): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _8.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _8.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryTotalClaimableRequest;
                fromJSON(object: any): _8.QueryTotalClaimableRequest;
                toJSON(message: _8.QueryTotalClaimableRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _8.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _8.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryTotalClaimableResponse;
                fromJSON(object: any): _8.QueryTotalClaimableResponse;
                toJSON(message: _8.QueryTotalClaimableResponse): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _8.QueryTotalClaimableResponse;
            };
            ClaimAuthorization: {
                encode(message: _7.ClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ClaimAuthorization;
                fromJSON(object: any): _7.ClaimAuthorization;
                toJSON(message: _7.ClaimAuthorization): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    action?: _5.Action;
                }): _7.ClaimAuthorization;
            };
            Params: {
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Params;
                fromJSON(object: any): _7.Params;
                toJSON(message: _7.Params): unknown;
                fromPartial(object: {
                    airdropEnabled?: boolean;
                    airdropStartTime?: {
                        seconds?: {
                            high?: number;
                            low?: number;
                            unsigned?: boolean;
                            add?: (addend: string | number | import("long")) => import("long");
                            and?: (other: string | number | import("long")) => import("long");
                            compare?: (other: string | number | import("long")) => number;
                            comp?: (other: string | number | import("long")) => number;
                            divide?: (divisor: string | number | import("long")) => import("long");
                            div?: (divisor: string | number | import("long")) => import("long");
                            equals?: (other: string | number | import("long")) => boolean;
                            eq?: (other: string | number | import("long")) => boolean;
                            getHighBits?: () => number;
                            getHighBitsUnsigned?: () => number;
                            getLowBits?: () => number;
                            getLowBitsUnsigned?: () => number;
                            getNumBitsAbs?: () => number;
                            greaterThan?: (other: string | number | import("long")) => boolean;
                            gt?: (other: string | number | import("long")) => boolean;
                            greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                            gte?: (other: string | number | import("long")) => boolean;
                            ge?: (other: string | number | import("long")) => boolean;
                            isEven?: () => boolean;
                            isNegative?: () => boolean;
                            isOdd?: () => boolean;
                            isPositive?: () => boolean;
                            isZero?: () => boolean;
                            eqz?: () => boolean;
                            lessThan?: (other: string | number | import("long")) => boolean;
                            lt?: (other: string | number | import("long")) => boolean;
                            lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                            lte?: (other: string | number | import("long")) => boolean;
                            le?: (other: string | number | import("long")) => boolean;
                            modulo?: (other: string | number | import("long")) => import("long");
                            mod?: (other: string | number | import("long")) => import("long");
                            rem?: (other: string | number | import("long")) => import("long");
                            multiply?: (multiplier: string | number | import("long")) => import("long");
                            mul?: (multiplier: string | number | import("long")) => import("long");
                            negate?: () => import("long");
                            neg?: () => import("long");
                            not?: () => import("long");
                            countLeadingZeros?: () => number;
                            clz?: () => number;
                            countTrailingZeros?: () => number;
                            ctz?: () => number;
                            notEquals?: (other: string | number | import("long")) => boolean;
                            neq?: (other: string | number | import("long")) => boolean;
                            ne?: (other: string | number | import("long")) => boolean;
                            or?: (other: string | number | import("long")) => import("long");
                            shiftLeft?: (numBits: number | import("long")) => import("long");
                            shl?: (numBits: number | import("long")) => import("long");
                            shiftRight?: (numBits: number | import("long")) => import("long");
                            shr?: (numBits: number | import("long")) => import("long");
                            shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                            shru?: (numBits: number | import("long")) => import("long");
                            shr_u?: (numBits: number | import("long")) => import("long");
                            rotateLeft?: (numBits: number | import("long")) => import("long");
                            rotl?: (numBits: number | import("long")) => import("long");
                            rotateRight?: (numBits: number | import("long")) => import("long");
                            rotr?: (numBits: number | import("long")) => import("long");
                            subtract?: (subtrahend: string | number | import("long")) => import("long");
                            sub?: (subtrahend: string | number | import("long")) => import("long");
                            toInt?: () => number;
                            toNumber?: () => number;
                            toBytes?: (le?: boolean) => number[];
                            toBytesLE?: () => number[];
                            toBytesBE?: () => number[];
                            toSigned?: () => import("long");
                            toString?: (radix?: number) => string;
                            toUnsigned?: () => import("long");
                            xor?: (other: string | number | import("long")) => import("long");
                        };
                        nanos?: number;
                    };
                    durationUntilDecay?: {
                        seconds?: {
                            high?: number;
                            low?: number;
                            unsigned?: boolean;
                            add?: (addend: string | number | import("long")) => import("long");
                            and?: (other: string | number | import("long")) => import("long");
                            compare?: (other: string | number | import("long")) => number;
                            comp?: (other: string | number | import("long")) => number;
                            divide?: (divisor: string | number | import("long")) => import("long");
                            div?: (divisor: string | number | import("long")) => import("long");
                            equals?: (other: string | number | import("long")) => boolean;
                            eq?: (other: string | number | import("long")) => boolean;
                            getHighBits?: () => number;
                            getHighBitsUnsigned?: () => number;
                            getLowBits?: () => number;
                            getLowBitsUnsigned?: () => number;
                            getNumBitsAbs?: () => number;
                            greaterThan?: (other: string | number | import("long")) => boolean;
                            gt?: (other: string | number | import("long")) => boolean;
                            greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                            gte?: (other: string | number | import("long")) => boolean;
                            ge?: (other: string | number | import("long")) => boolean;
                            isEven?: () => boolean;
                            isNegative?: () => boolean;
                            isOdd?: () => boolean;
                            isPositive?: () => boolean;
                            isZero?: () => boolean;
                            eqz?: () => boolean;
                            lessThan?: (other: string | number | import("long")) => boolean;
                            lt?: (other: string | number | import("long")) => boolean;
                            lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                            lte?: (other: string | number | import("long")) => boolean;
                            le?: (other: string | number | import("long")) => boolean;
                            modulo?: (other: string | number | import("long")) => import("long");
                            mod?: (other: string | number | import("long")) => import("long");
                            rem?: (other: string | number | import("long")) => import("long");
                            multiply?: (multiplier: string | number | import("long")) => import("long");
                            mul?: (multiplier: string | number | import("long")) => import("long");
                            negate?: () => import("long");
                            neg?: () => import("long");
                            not?: () => import("long");
                            countLeadingZeros?: () => number;
                            clz?: () => number;
                            countTrailingZeros?: () => number;
                            ctz?: () => number;
                            notEquals?: (other: string | number | import("long")) => boolean;
                            neq?: (other: string | number | import("long")) => boolean;
                            ne?: (other: string | number | import("long")) => boolean;
                            or?: (other: string | number | import("long")) => import("long");
                            shiftLeft?: (numBits: number | import("long")) => import("long");
                            shl?: (numBits: number | import("long")) => import("long");
                            shiftRight?: (numBits: number | import("long")) => import("long");
                            shr?: (numBits: number | import("long")) => import("long");
                            shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                            shru?: (numBits: number | import("long")) => import("long");
                            shr_u?: (numBits: number | import("long")) => import("long");
                            rotateLeft?: (numBits: number | import("long")) => import("long");
                            rotl?: (numBits: number | import("long")) => import("long");
                            rotateRight?: (numBits: number | import("long")) => import("long");
                            rotr?: (numBits: number | import("long")) => import("long");
                            subtract?: (subtrahend: string | number | import("long")) => import("long");
                            sub?: (subtrahend: string | number | import("long")) => import("long");
                            toInt?: () => number;
                            toNumber?: () => number;
                            toBytes?: (le?: boolean) => number[];
                            toBytesLE?: () => number[];
                            toBytesBE?: () => number[];
                            toSigned?: () => import("long");
                            toString?: (radix?: number) => string;
                            toUnsigned?: () => import("long");
                            xor?: (other: string | number | import("long")) => import("long");
                        };
                        nanos?: number;
                    };
                    durationOfDecay?: {
                        seconds?: {
                            high?: number;
                            low?: number;
                            unsigned?: boolean;
                            add?: (addend: string | number | import("long")) => import("long");
                            and?: (other: string | number | import("long")) => import("long");
                            compare?: (other: string | number | import("long")) => number;
                            comp?: (other: string | number | import("long")) => number;
                            divide?: (divisor: string | number | import("long")) => import("long");
                            div?: (divisor: string | number | import("long")) => import("long");
                            equals?: (other: string | number | import("long")) => boolean;
                            eq?: (other: string | number | import("long")) => boolean;
                            getHighBits?: () => number;
                            getHighBitsUnsigned?: () => number;
                            getLowBits?: () => number;
                            getLowBitsUnsigned?: () => number;
                            getNumBitsAbs?: () => number;
                            greaterThan?: (other: string | number | import("long")) => boolean;
                            gt?: (other: string | number | import("long")) => boolean;
                            greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                            gte?: (other: string | number | import("long")) => boolean;
                            ge?: (other: string | number | import("long")) => boolean;
                            isEven?: () => boolean;
                            isNegative?: () => boolean;
                            isOdd?: () => boolean;
                            isPositive?: () => boolean;
                            isZero?: () => boolean;
                            eqz?: () => boolean;
                            lessThan?: (other: string | number | import("long")) => boolean;
                            lt?: (other: string | number | import("long")) => boolean;
                            lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                            lte?: (other: string | number | import("long")) => boolean;
                            le?: (other: string | number | import("long")) => boolean;
                            modulo?: (other: string | number | import("long")) => import("long");
                            mod?: (other: string | number | import("long")) => import("long");
                            rem?: (other: string | number | import("long")) => import("long");
                            multiply?: (multiplier: string | number | import("long")) => import("long");
                            mul?: (multiplier: string | number | import("long")) => import("long");
                            negate?: () => import("long");
                            neg?: () => import("long");
                            not?: () => import("long");
                            countLeadingZeros?: () => number;
                            clz?: () => number;
                            countTrailingZeros?: () => number;
                            ctz?: () => number;
                            notEquals?: (other: string | number | import("long")) => boolean;
                            neq?: (other: string | number | import("long")) => boolean;
                            ne?: (other: string | number | import("long")) => boolean;
                            or?: (other: string | number | import("long")) => import("long");
                            shiftLeft?: (numBits: number | import("long")) => import("long");
                            shl?: (numBits: number | import("long")) => import("long");
                            shiftRight?: (numBits: number | import("long")) => import("long");
                            shr?: (numBits: number | import("long")) => import("long");
                            shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                            shru?: (numBits: number | import("long")) => import("long");
                            shr_u?: (numBits: number | import("long")) => import("long");
                            rotateLeft?: (numBits: number | import("long")) => import("long");
                            rotl?: (numBits: number | import("long")) => import("long");
                            rotateRight?: (numBits: number | import("long")) => import("long");
                            rotr?: (numBits: number | import("long")) => import("long");
                            subtract?: (subtrahend: string | number | import("long")) => import("long");
                            sub?: (subtrahend: string | number | import("long")) => import("long");
                            toInt?: () => number;
                            toNumber?: () => number;
                            toBytes?: (le?: boolean) => number[];
                            toBytesLE?: () => number[];
                            toBytesBE?: () => number[];
                            toSigned?: () => import("long");
                            toString?: (radix?: number) => string;
                            toUnsigned?: () => import("long");
                            xor?: (other: string | number | import("long")) => import("long");
                        };
                        nanos?: number;
                    };
                    claimDenom?: string;
                    allowedClaimers?: {
                        contractAddress?: string;
                        action?: _5.Action;
                    }[];
                }): _7.Params;
            };
            GenesisState: {
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenesisState;
                fromJSON(object: any): _6.GenesisState;
                toJSON(message: _6.GenesisState): unknown;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    };
                    params?: {
                        airdropEnabled?: boolean;
                        airdropStartTime?: {
                            seconds?: {
                                high?: number;
                                low?: number;
                                unsigned?: boolean;
                                add?: (addend: string | number | import("long")) => import("long");
                                and?: (other: string | number | import("long")) => import("long");
                                compare?: (other: string | number | import("long")) => number;
                                comp?: (other: string | number | import("long")) => number;
                                divide?: (divisor: string | number | import("long")) => import("long");
                                div?: (divisor: string | number | import("long")) => import("long");
                                equals?: (other: string | number | import("long")) => boolean;
                                eq?: (other: string | number | import("long")) => boolean;
                                getHighBits?: () => number;
                                getHighBitsUnsigned?: () => number;
                                getLowBits?: () => number;
                                getLowBitsUnsigned?: () => number;
                                getNumBitsAbs?: () => number;
                                greaterThan?: (other: string | number | import("long")) => boolean;
                                gt?: (other: string | number | import("long")) => boolean;
                                greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                                gte?: (other: string | number | import("long")) => boolean;
                                ge?: (other: string | number | import("long")) => boolean;
                                isEven?: () => boolean;
                                isNegative?: () => boolean;
                                isOdd?: () => boolean;
                                isPositive?: () => boolean;
                                isZero?: () => boolean;
                                eqz?: () => boolean;
                                lessThan?: (other: string | number | import("long")) => boolean;
                                lt?: (other: string | number | import("long")) => boolean;
                                lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                                lte?: (other: string | number | import("long")) => boolean;
                                le?: (other: string | number | import("long")) => boolean;
                                modulo?: (other: string | number | import("long")) => import("long");
                                mod?: (other: string | number | import("long")) => import("long");
                                rem?: (other: string | number | import("long")) => import("long");
                                multiply?: (multiplier: string | number | import("long")) => import("long");
                                mul?: (multiplier: string | number | import("long")) => import("long");
                                negate?: () => import("long");
                                neg?: () => import("long");
                                not?: () => import("long");
                                countLeadingZeros?: () => number;
                                clz?: () => number;
                                countTrailingZeros?: () => number;
                                ctz?: () => number;
                                notEquals?: (other: string | number | import("long")) => boolean;
                                neq?: (other: string | number | import("long")) => boolean;
                                ne?: (other: string | number | import("long")) => boolean;
                                or?: (other: string | number | import("long")) => import("long");
                                shiftLeft?: (numBits: number | import("long")) => import("long");
                                shl?: (numBits: number | import("long")) => import("long");
                                shiftRight?: (numBits: number | import("long")) => import("long");
                                shr?: (numBits: number | import("long")) => import("long");
                                shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                                shru?: (numBits: number | import("long")) => import("long");
                                shr_u?: (numBits: number | import("long")) => import("long");
                                rotateLeft?: (numBits: number | import("long")) => import("long");
                                rotl?: (numBits: number | import("long")) => import("long");
                                rotateRight?: (numBits: number | import("long")) => import("long");
                                rotr?: (numBits: number | import("long")) => import("long");
                                subtract?: (subtrahend: string | number | import("long")) => import("long");
                                sub?: (subtrahend: string | number | import("long")) => import("long");
                                toInt?: () => number;
                                toNumber?: () => number;
                                toBytes?: (le?: boolean) => number[];
                                toBytesLE?: () => number[];
                                toBytesBE?: () => number[];
                                toSigned?: () => import("long");
                                toString?: (radix?: number) => string;
                                toUnsigned?: () => import("long");
                                xor?: (other: string | number | import("long")) => import("long");
                            };
                            nanos?: number;
                        };
                        durationUntilDecay?: {
                            seconds?: {
                                high?: number;
                                low?: number;
                                unsigned?: boolean;
                                add?: (addend: string | number | import("long")) => import("long");
                                and?: (other: string | number | import("long")) => import("long");
                                compare?: (other: string | number | import("long")) => number;
                                comp?: (other: string | number | import("long")) => number;
                                divide?: (divisor: string | number | import("long")) => import("long");
                                div?: (divisor: string | number | import("long")) => import("long");
                                equals?: (other: string | number | import("long")) => boolean;
                                eq?: (other: string | number | import("long")) => boolean;
                                getHighBits?: () => number;
                                getHighBitsUnsigned?: () => number;
                                getLowBits?: () => number;
                                getLowBitsUnsigned?: () => number;
                                getNumBitsAbs?: () => number;
                                greaterThan?: (other: string | number | import("long")) => boolean;
                                gt?: (other: string | number | import("long")) => boolean;
                                greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                                gte?: (other: string | number | import("long")) => boolean;
                                ge?: (other: string | number | import("long")) => boolean;
                                isEven?: () => boolean;
                                isNegative?: () => boolean;
                                isOdd?: () => boolean;
                                isPositive?: () => boolean;
                                isZero?: () => boolean;
                                eqz?: () => boolean;
                                lessThan?: (other: string | number | import("long")) => boolean;
                                lt?: (other: string | number | import("long")) => boolean;
                                lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                                lte?: (other: string | number | import("long")) => boolean;
                                le?: (other: string | number | import("long")) => boolean;
                                modulo?: (other: string | number | import("long")) => import("long");
                                mod?: (other: string | number | import("long")) => import("long");
                                rem?: (other: string | number | import("long")) => import("long");
                                multiply?: (multiplier: string | number | import("long")) => import("long");
                                mul?: (multiplier: string | number | import("long")) => import("long");
                                negate?: () => import("long");
                                neg?: () => import("long");
                                not?: () => import("long");
                                countLeadingZeros?: () => number;
                                clz?: () => number;
                                countTrailingZeros?: () => number;
                                ctz?: () => number;
                                notEquals?: (other: string | number | import("long")) => boolean;
                                neq?: (other: string | number | import("long")) => boolean;
                                ne?: (other: string | number | import("long")) => boolean;
                                or?: (other: string | number | import("long")) => import("long");
                                shiftLeft?: (numBits: number | import("long")) => import("long");
                                shl?: (numBits: number | import("long")) => import("long");
                                shiftRight?: (numBits: number | import("long")) => import("long");
                                shr?: (numBits: number | import("long")) => import("long");
                                shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                                shru?: (numBits: number | import("long")) => import("long");
                                shr_u?: (numBits: number | import("long")) => import("long");
                                rotateLeft?: (numBits: number | import("long")) => import("long");
                                rotl?: (numBits: number | import("long")) => import("long");
                                rotateRight?: (numBits: number | import("long")) => import("long");
                                rotr?: (numBits: number | import("long")) => import("long");
                                subtract?: (subtrahend: string | number | import("long")) => import("long");
                                sub?: (subtrahend: string | number | import("long")) => import("long");
                                toInt?: () => number;
                                toNumber?: () => number;
                                toBytes?: (le?: boolean) => number[];
                                toBytesLE?: () => number[];
                                toBytesBE?: () => number[];
                                toSigned?: () => import("long");
                                toString?: (radix?: number) => string;
                                toUnsigned?: () => import("long");
                                xor?: (other: string | number | import("long")) => import("long");
                            };
                            nanos?: number;
                        };
                        durationOfDecay?: {
                            seconds?: {
                                high?: number;
                                low?: number;
                                unsigned?: boolean;
                                add?: (addend: string | number | import("long")) => import("long");
                                and?: (other: string | number | import("long")) => import("long");
                                compare?: (other: string | number | import("long")) => number;
                                comp?: (other: string | number | import("long")) => number;
                                divide?: (divisor: string | number | import("long")) => import("long");
                                div?: (divisor: string | number | import("long")) => import("long");
                                equals?: (other: string | number | import("long")) => boolean;
                                eq?: (other: string | number | import("long")) => boolean;
                                getHighBits?: () => number;
                                getHighBitsUnsigned?: () => number;
                                getLowBits?: () => number;
                                getLowBitsUnsigned?: () => number;
                                getNumBitsAbs?: () => number;
                                greaterThan?: (other: string | number | import("long")) => boolean;
                                gt?: (other: string | number | import("long")) => boolean;
                                greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                                gte?: (other: string | number | import("long")) => boolean;
                                ge?: (other: string | number | import("long")) => boolean;
                                isEven?: () => boolean;
                                isNegative?: () => boolean;
                                isOdd?: () => boolean;
                                isPositive?: () => boolean;
                                isZero?: () => boolean;
                                eqz?: () => boolean;
                                lessThan?: (other: string | number | import("long")) => boolean;
                                lt?: (other: string | number | import("long")) => boolean;
                                lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                                lte?: (other: string | number | import("long")) => boolean;
                                le?: (other: string | number | import("long")) => boolean;
                                modulo?: (other: string | number | import("long")) => import("long");
                                mod?: (other: string | number | import("long")) => import("long");
                                rem?: (other: string | number | import("long")) => import("long");
                                multiply?: (multiplier: string | number | import("long")) => import("long");
                                mul?: (multiplier: string | number | import("long")) => import("long");
                                negate?: () => import("long");
                                neg?: () => import("long");
                                not?: () => import("long");
                                countLeadingZeros?: () => number;
                                clz?: () => number;
                                countTrailingZeros?: () => number;
                                ctz?: () => number;
                                notEquals?: (other: string | number | import("long")) => boolean;
                                neq?: (other: string | number | import("long")) => boolean;
                                ne?: (other: string | number | import("long")) => boolean;
                                or?: (other: string | number | import("long")) => import("long");
                                shiftLeft?: (numBits: number | import("long")) => import("long");
                                shl?: (numBits: number | import("long")) => import("long");
                                shiftRight?: (numBits: number | import("long")) => import("long");
                                shr?: (numBits: number | import("long")) => import("long");
                                shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                                shru?: (numBits: number | import("long")) => import("long");
                                shr_u?: (numBits: number | import("long")) => import("long");
                                rotateLeft?: (numBits: number | import("long")) => import("long");
                                rotl?: (numBits: number | import("long")) => import("long");
                                rotateRight?: (numBits: number | import("long")) => import("long");
                                rotr?: (numBits: number | import("long")) => import("long");
                                subtract?: (subtrahend: string | number | import("long")) => import("long");
                                sub?: (subtrahend: string | number | import("long")) => import("long");
                                toInt?: () => number;
                                toNumber?: () => number;
                                toBytes?: (le?: boolean) => number[];
                                toBytesLE?: () => number[];
                                toBytesBE?: () => number[];
                                toSigned?: () => import("long");
                                toString?: (radix?: number) => string;
                                toUnsigned?: () => import("long");
                                xor?: (other: string | number | import("long")) => import("long");
                            };
                            nanos?: number;
                        };
                        claimDenom?: string;
                        allowedClaimers?: {
                            contractAddress?: string;
                            action?: _5.Action;
                        }[];
                    };
                    claimRecords?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    }[];
                }): _6.GenesisState;
            };
            actionFromJSON(object: any): _5.Action;
            actionToJSON(object: _5.Action): string;
            Action: typeof _5.Action;
            ActionSDKType: typeof _5.ActionSDKType;
            ClaimRecord: {
                encode(message: _5.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ClaimRecord;
                fromJSON(object: any): _5.ClaimRecord;
                toJSON(message: _5.ClaimRecord): unknown;
                fromPartial(object: {
                    address?: string;
                    initialClaimableAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    actionCompleted?: boolean[];
                }): _5.ClaimRecord;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                inflation(request?: _12.QueryInflationRequest): Promise<_12.QueryInflationResponse>;
                annualProvisions(request?: _12.QueryAnnualProvisionsRequest): Promise<_12.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _12.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryParamsRequest;
                fromJSON(_: any): _12.QueryParamsRequest;
                toJSON(_: _12.QueryParamsRequest): unknown;
                fromPartial(_: {}): _12.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _12.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryParamsResponse;
                fromJSON(object: any): _12.QueryParamsResponse;
                toJSON(message: _12.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        blocksPerYear?: {
                            high?: number;
                            low?: number;
                            unsigned?: boolean;
                            add?: (addend: string | number | import("long")) => import("long");
                            and?: (other: string | number | import("long")) => import("long");
                            compare?: (other: string | number | import("long")) => number;
                            comp?: (other: string | number | import("long")) => number;
                            divide?: (divisor: string | number | import("long")) => import("long");
                            div?: (divisor: string | number | import("long")) => import("long");
                            equals?: (other: string | number | import("long")) => boolean;
                            eq?: (other: string | number | import("long")) => boolean;
                            getHighBits?: () => number;
                            getHighBitsUnsigned?: () => number;
                            getLowBits?: () => number;
                            getLowBitsUnsigned?: () => number;
                            getNumBitsAbs?: () => number;
                            greaterThan?: (other: string | number | import("long")) => boolean;
                            gt?: (other: string | number | import("long")) => boolean;
                            greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                            gte?: (other: string | number | import("long")) => boolean;
                            ge?: (other: string | number | import("long")) => boolean;
                            isEven?: () => boolean;
                            isNegative?: () => boolean;
                            isOdd?: () => boolean;
                            isPositive?: () => boolean;
                            isZero?: () => boolean;
                            eqz?: () => boolean;
                            lessThan?: (other: string | number | import("long")) => boolean;
                            lt?: (other: string | number | import("long")) => boolean;
                            lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                            lte?: (other: string | number | import("long")) => boolean;
                            le?: (other: string | number | import("long")) => boolean;
                            modulo?: (other: string | number | import("long")) => import("long");
                            mod?: (other: string | number | import("long")) => import("long");
                            rem?: (other: string | number | import("long")) => import("long");
                            multiply?: (multiplier: string | number | import("long")) => import("long");
                            mul?: (multiplier: string | number | import("long")) => import("long");
                            negate?: () => import("long");
                            neg?: () => import("long");
                            not?: () => import("long");
                            countLeadingZeros?: () => number;
                            clz?: () => number;
                            countTrailingZeros?: () => number;
                            ctz?: () => number;
                            notEquals?: (other: string | number | import("long")) => boolean;
                            neq?: (other: string | number | import("long")) => boolean;
                            ne?: (other: string | number | import("long")) => boolean;
                            or?: (other: string | number | import("long")) => import("long");
                            shiftLeft?: (numBits: number | import("long")) => import("long");
                            shl?: (numBits: number | import("long")) => import("long");
                            shiftRight?: (numBits: number | import("long")) => import("long");
                            shr?: (numBits: number | import("long")) => import("long");
                            shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                            shru?: (numBits: number | import("long")) => import("long");
                            shr_u?: (numBits: number | import("long")) => import("long");
                            rotateLeft?: (numBits: number | import("long")) => import("long");
                            rotl?: (numBits: number | import("long")) => import("long");
                            rotateRight?: (numBits: number | import("long")) => import("long");
                            rotr?: (numBits: number | import("long")) => import("long");
                            subtract?: (subtrahend: string | number | import("long")) => import("long");
                            sub?: (subtrahend: string | number | import("long")) => import("long");
                            toInt?: () => number;
                            toNumber?: () => number;
                            toBytes?: (le?: boolean) => number[];
                            toBytesLE?: () => number[];
                            toBytesBE?: () => number[];
                            toSigned?: () => import("long");
                            toString?: (radix?: number) => string;
                            toUnsigned?: () => import("long");
                            xor?: (other: string | number | import("long")) => import("long");
                        };
                    };
                }): _12.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _12.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryInflationRequest;
                fromJSON(_: any): _12.QueryInflationRequest;
                toJSON(_: _12.QueryInflationRequest): unknown;
                fromPartial(_: {}): _12.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _12.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryInflationResponse;
                fromJSON(object: any): _12.QueryInflationResponse;
                toJSON(message: _12.QueryInflationResponse): unknown;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _12.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _12.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _12.QueryAnnualProvisionsRequest;
                toJSON(_: _12.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _12.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _12.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _12.QueryAnnualProvisionsResponse;
                toJSON(message: _12.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _12.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _11.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Minter;
                fromJSON(object: any): _11.Minter;
                toJSON(message: _11.Minter): unknown;
                fromPartial(object: {
                    inflation?: string;
                    phase?: {
                        high?: number;
                        low?: number;
                        unsigned?: boolean;
                        add?: (addend: string | number | import("long")) => import("long");
                        and?: (other: string | number | import("long")) => import("long");
                        compare?: (other: string | number | import("long")) => number;
                        comp?: (other: string | number | import("long")) => number;
                        divide?: (divisor: string | number | import("long")) => import("long");
                        div?: (divisor: string | number | import("long")) => import("long");
                        equals?: (other: string | number | import("long")) => boolean;
                        eq?: (other: string | number | import("long")) => boolean;
                        getHighBits?: () => number;
                        getHighBitsUnsigned?: () => number;
                        getLowBits?: () => number;
                        getLowBitsUnsigned?: () => number;
                        getNumBitsAbs?: () => number;
                        greaterThan?: (other: string | number | import("long")) => boolean;
                        gt?: (other: string | number | import("long")) => boolean;
                        greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                        gte?: (other: string | number | import("long")) => boolean;
                        ge?: (other: string | number | import("long")) => boolean;
                        isEven?: () => boolean;
                        isNegative?: () => boolean;
                        isOdd?: () => boolean;
                        isPositive?: () => boolean;
                        isZero?: () => boolean;
                        eqz?: () => boolean;
                        lessThan?: (other: string | number | import("long")) => boolean;
                        lt?: (other: string | number | import("long")) => boolean;
                        lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                        lte?: (other: string | number | import("long")) => boolean;
                        le?: (other: string | number | import("long")) => boolean;
                        modulo?: (other: string | number | import("long")) => import("long");
                        mod?: (other: string | number | import("long")) => import("long");
                        rem?: (other: string | number | import("long")) => import("long");
                        multiply?: (multiplier: string | number | import("long")) => import("long");
                        mul?: (multiplier: string | number | import("long")) => import("long");
                        negate?: () => import("long");
                        neg?: () => import("long");
                        not?: () => import("long");
                        countLeadingZeros?: () => number;
                        clz?: () => number;
                        countTrailingZeros?: () => number;
                        ctz?: () => number;
                        notEquals?: (other: string | number | import("long")) => boolean;
                        neq?: (other: string | number | import("long")) => boolean;
                        ne?: (other: string | number | import("long")) => boolean;
                        or?: (other: string | number | import("long")) => import("long");
                        shiftLeft?: (numBits: number | import("long")) => import("long");
                        shl?: (numBits: number | import("long")) => import("long");
                        shiftRight?: (numBits: number | import("long")) => import("long");
                        shr?: (numBits: number | import("long")) => import("long");
                        shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                        shru?: (numBits: number | import("long")) => import("long");
                        shr_u?: (numBits: number | import("long")) => import("long");
                        rotateLeft?: (numBits: number | import("long")) => import("long");
                        rotl?: (numBits: number | import("long")) => import("long");
                        rotateRight?: (numBits: number | import("long")) => import("long");
                        rotr?: (numBits: number | import("long")) => import("long");
                        subtract?: (subtrahend: string | number | import("long")) => import("long");
                        sub?: (subtrahend: string | number | import("long")) => import("long");
                        toInt?: () => number;
                        toNumber?: () => number;
                        toBytes?: (le?: boolean) => number[];
                        toBytesLE?: () => number[];
                        toBytesBE?: () => number[];
                        toSigned?: () => import("long");
                        toString?: (radix?: number) => string;
                        toUnsigned?: () => import("long");
                        xor?: (other: string | number | import("long")) => import("long");
                    };
                    startPhaseBlock?: {
                        high?: number;
                        low?: number;
                        unsigned?: boolean;
                        add?: (addend: string | number | import("long")) => import("long");
                        and?: (other: string | number | import("long")) => import("long");
                        compare?: (other: string | number | import("long")) => number;
                        comp?: (other: string | number | import("long")) => number;
                        divide?: (divisor: string | number | import("long")) => import("long");
                        div?: (divisor: string | number | import("long")) => import("long");
                        equals?: (other: string | number | import("long")) => boolean;
                        eq?: (other: string | number | import("long")) => boolean;
                        getHighBits?: () => number;
                        getHighBitsUnsigned?: () => number;
                        getLowBits?: () => number;
                        getLowBitsUnsigned?: () => number;
                        getNumBitsAbs?: () => number;
                        greaterThan?: (other: string | number | import("long")) => boolean;
                        gt?: (other: string | number | import("long")) => boolean;
                        greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                        gte?: (other: string | number | import("long")) => boolean;
                        ge?: (other: string | number | import("long")) => boolean;
                        isEven?: () => boolean;
                        isNegative?: () => boolean;
                        isOdd?: () => boolean;
                        isPositive?: () => boolean;
                        isZero?: () => boolean;
                        eqz?: () => boolean;
                        lessThan?: (other: string | number | import("long")) => boolean;
                        lt?: (other: string | number | import("long")) => boolean;
                        lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                        lte?: (other: string | number | import("long")) => boolean;
                        le?: (other: string | number | import("long")) => boolean;
                        modulo?: (other: string | number | import("long")) => import("long");
                        mod?: (other: string | number | import("long")) => import("long");
                        rem?: (other: string | number | import("long")) => import("long");
                        multiply?: (multiplier: string | number | import("long")) => import("long");
                        mul?: (multiplier: string | number | import("long")) => import("long");
                        negate?: () => import("long");
                        neg?: () => import("long");
                        not?: () => import("long");
                        countLeadingZeros?: () => number;
                        clz?: () => number;
                        countTrailingZeros?: () => number;
                        ctz?: () => number;
                        notEquals?: (other: string | number | import("long")) => boolean;
                        neq?: (other: string | number | import("long")) => boolean;
                        ne?: (other: string | number | import("long")) => boolean;
                        or?: (other: string | number | import("long")) => import("long");
                        shiftLeft?: (numBits: number | import("long")) => import("long");
                        shl?: (numBits: number | import("long")) => import("long");
                        shiftRight?: (numBits: number | import("long")) => import("long");
                        shr?: (numBits: number | import("long")) => import("long");
                        shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                        shru?: (numBits: number | import("long")) => import("long");
                        shr_u?: (numBits: number | import("long")) => import("long");
                        rotateLeft?: (numBits: number | import("long")) => import("long");
                        rotl?: (numBits: number | import("long")) => import("long");
                        rotateRight?: (numBits: number | import("long")) => import("long");
                        rotr?: (numBits: number | import("long")) => import("long");
                        subtract?: (subtrahend: string | number | import("long")) => import("long");
                        sub?: (subtrahend: string | number | import("long")) => import("long");
                        toInt?: () => number;
                        toNumber?: () => number;
                        toBytes?: (le?: boolean) => number[];
                        toBytesLE?: () => number[];
                        toBytesBE?: () => number[];
                        toSigned?: () => import("long");
                        toString?: (radix?: number) => string;
                        toUnsigned?: () => import("long");
                        xor?: (other: string | number | import("long")) => import("long");
                    };
                    annualProvisions?: string;
                }): _11.Minter;
            };
            Params: {
                encode(message: _11.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Params;
                fromJSON(object: any): _11.Params;
                toJSON(message: _11.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    blocksPerYear?: {
                        high?: number;
                        low?: number;
                        unsigned?: boolean;
                        add?: (addend: string | number | import("long")) => import("long");
                        and?: (other: string | number | import("long")) => import("long");
                        compare?: (other: string | number | import("long")) => number;
                        comp?: (other: string | number | import("long")) => number;
                        divide?: (divisor: string | number | import("long")) => import("long");
                        div?: (divisor: string | number | import("long")) => import("long");
                        equals?: (other: string | number | import("long")) => boolean;
                        eq?: (other: string | number | import("long")) => boolean;
                        getHighBits?: () => number;
                        getHighBitsUnsigned?: () => number;
                        getLowBits?: () => number;
                        getLowBitsUnsigned?: () => number;
                        getNumBitsAbs?: () => number;
                        greaterThan?: (other: string | number | import("long")) => boolean;
                        gt?: (other: string | number | import("long")) => boolean;
                        greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                        gte?: (other: string | number | import("long")) => boolean;
                        ge?: (other: string | number | import("long")) => boolean;
                        isEven?: () => boolean;
                        isNegative?: () => boolean;
                        isOdd?: () => boolean;
                        isPositive?: () => boolean;
                        isZero?: () => boolean;
                        eqz?: () => boolean;
                        lessThan?: (other: string | number | import("long")) => boolean;
                        lt?: (other: string | number | import("long")) => boolean;
                        lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                        lte?: (other: string | number | import("long")) => boolean;
                        le?: (other: string | number | import("long")) => boolean;
                        modulo?: (other: string | number | import("long")) => import("long");
                        mod?: (other: string | number | import("long")) => import("long");
                        rem?: (other: string | number | import("long")) => import("long");
                        multiply?: (multiplier: string | number | import("long")) => import("long");
                        mul?: (multiplier: string | number | import("long")) => import("long");
                        negate?: () => import("long");
                        neg?: () => import("long");
                        not?: () => import("long");
                        countLeadingZeros?: () => number;
                        clz?: () => number;
                        countTrailingZeros?: () => number;
                        ctz?: () => number;
                        notEquals?: (other: string | number | import("long")) => boolean;
                        neq?: (other: string | number | import("long")) => boolean;
                        ne?: (other: string | number | import("long")) => boolean;
                        or?: (other: string | number | import("long")) => import("long");
                        shiftLeft?: (numBits: number | import("long")) => import("long");
                        shl?: (numBits: number | import("long")) => import("long");
                        shiftRight?: (numBits: number | import("long")) => import("long");
                        shr?: (numBits: number | import("long")) => import("long");
                        shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                        shru?: (numBits: number | import("long")) => import("long");
                        shr_u?: (numBits: number | import("long")) => import("long");
                        rotateLeft?: (numBits: number | import("long")) => import("long");
                        rotl?: (numBits: number | import("long")) => import("long");
                        rotateRight?: (numBits: number | import("long")) => import("long");
                        rotr?: (numBits: number | import("long")) => import("long");
                        subtract?: (subtrahend: string | number | import("long")) => import("long");
                        sub?: (subtrahend: string | number | import("long")) => import("long");
                        toInt?: () => number;
                        toNumber?: () => number;
                        toBytes?: (le?: boolean) => number[];
                        toBytesLE?: () => number[];
                        toBytesBE?: () => number[];
                        toSigned?: () => import("long");
                        toString?: (radix?: number) => string;
                        toUnsigned?: () => import("long");
                        xor?: (other: string | number | import("long")) => import("long");
                    };
                }): _11.Params;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromJSON(object: any): _10.GenesisState;
                toJSON(message: _10.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        phase?: {
                            high?: number;
                            low?: number;
                            unsigned?: boolean;
                            add?: (addend: string | number | import("long")) => import("long");
                            and?: (other: string | number | import("long")) => import("long");
                            compare?: (other: string | number | import("long")) => number;
                            comp?: (other: string | number | import("long")) => number;
                            divide?: (divisor: string | number | import("long")) => import("long");
                            div?: (divisor: string | number | import("long")) => import("long");
                            equals?: (other: string | number | import("long")) => boolean;
                            eq?: (other: string | number | import("long")) => boolean;
                            getHighBits?: () => number;
                            getHighBitsUnsigned?: () => number;
                            getLowBits?: () => number;
                            getLowBitsUnsigned?: () => number;
                            getNumBitsAbs?: () => number;
                            greaterThan?: (other: string | number | import("long")) => boolean;
                            gt?: (other: string | number | import("long")) => boolean;
                            greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                            gte?: (other: string | number | import("long")) => boolean;
                            ge?: (other: string | number | import("long")) => boolean;
                            isEven?: () => boolean;
                            isNegative?: () => boolean;
                            isOdd?: () => boolean;
                            isPositive?: () => boolean;
                            isZero?: () => boolean;
                            eqz?: () => boolean;
                            lessThan?: (other: string | number | import("long")) => boolean;
                            lt?: (other: string | number | import("long")) => boolean;
                            lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                            lte?: (other: string | number | import("long")) => boolean;
                            le?: (other: string | number | import("long")) => boolean;
                            modulo?: (other: string | number | import("long")) => import("long");
                            mod?: (other: string | number | import("long")) => import("long");
                            rem?: (other: string | number | import("long")) => import("long");
                            multiply?: (multiplier: string | number | import("long")) => import("long");
                            mul?: (multiplier: string | number | import("long")) => import("long");
                            negate?: () => import("long");
                            neg?: () => import("long");
                            not?: () => import("long");
                            countLeadingZeros?: () => number;
                            clz?: () => number;
                            countTrailingZeros?: () => number;
                            ctz?: () => number;
                            notEquals?: (other: string | number | import("long")) => boolean;
                            neq?: (other: string | number | import("long")) => boolean;
                            ne?: (other: string | number | import("long")) => boolean;
                            or?: (other: string | number | import("long")) => import("long");
                            shiftLeft?: (numBits: number | import("long")) => import("long");
                            shl?: (numBits: number | import("long")) => import("long");
                            shiftRight?: (numBits: number | import("long")) => import("long");
                            shr?: (numBits: number | import("long")) => import("long");
                            shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                            shru?: (numBits: number | import("long")) => import("long");
                            shr_u?: (numBits: number | import("long")) => import("long");
                            rotateLeft?: (numBits: number | import("long")) => import("long");
                            rotl?: (numBits: number | import("long")) => import("long");
                            rotateRight?: (numBits: number | import("long")) => import("long");
                            rotr?: (numBits: number | import("long")) => import("long");
                            subtract?: (subtrahend: string | number | import("long")) => import("long");
                            sub?: (subtrahend: string | number | import("long")) => import("long");
                            toInt?: () => number;
                            toNumber?: () => number;
                            toBytes?: (le?: boolean) => number[];
                            toBytesLE?: () => number[];
                            toBytesBE?: () => number[];
                            toSigned?: () => import("long");
                            toString?: (radix?: number) => string;
                            toUnsigned?: () => import("long");
                            xor?: (other: string | number | import("long")) => import("long");
                        };
                        startPhaseBlock?: {
                            high?: number;
                            low?: number;
                            unsigned?: boolean;
                            add?: (addend: string | number | import("long")) => import("long");
                            and?: (other: string | number | import("long")) => import("long");
                            compare?: (other: string | number | import("long")) => number;
                            comp?: (other: string | number | import("long")) => number;
                            divide?: (divisor: string | number | import("long")) => import("long");
                            div?: (divisor: string | number | import("long")) => import("long");
                            equals?: (other: string | number | import("long")) => boolean;
                            eq?: (other: string | number | import("long")) => boolean;
                            getHighBits?: () => number;
                            getHighBitsUnsigned?: () => number;
                            getLowBits?: () => number;
                            getLowBitsUnsigned?: () => number;
                            getNumBitsAbs?: () => number;
                            greaterThan?: (other: string | number | import("long")) => boolean;
                            gt?: (other: string | number | import("long")) => boolean;
                            greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                            gte?: (other: string | number | import("long")) => boolean;
                            ge?: (other: string | number | import("long")) => boolean;
                            isEven?: () => boolean;
                            isNegative?: () => boolean;
                            isOdd?: () => boolean;
                            isPositive?: () => boolean;
                            isZero?: () => boolean;
                            eqz?: () => boolean;
                            lessThan?: (other: string | number | import("long")) => boolean;
                            lt?: (other: string | number | import("long")) => boolean;
                            lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                            lte?: (other: string | number | import("long")) => boolean;
                            le?: (other: string | number | import("long")) => boolean;
                            modulo?: (other: string | number | import("long")) => import("long");
                            mod?: (other: string | number | import("long")) => import("long");
                            rem?: (other: string | number | import("long")) => import("long");
                            multiply?: (multiplier: string | number | import("long")) => import("long");
                            mul?: (multiplier: string | number | import("long")) => import("long");
                            negate?: () => import("long");
                            neg?: () => import("long");
                            not?: () => import("long");
                            countLeadingZeros?: () => number;
                            clz?: () => number;
                            countTrailingZeros?: () => number;
                            ctz?: () => number;
                            notEquals?: (other: string | number | import("long")) => boolean;
                            neq?: (other: string | number | import("long")) => boolean;
                            ne?: (other: string | number | import("long")) => boolean;
                            or?: (other: string | number | import("long")) => import("long");
                            shiftLeft?: (numBits: number | import("long")) => import("long");
                            shl?: (numBits: number | import("long")) => import("long");
                            shiftRight?: (numBits: number | import("long")) => import("long");
                            shr?: (numBits: number | import("long")) => import("long");
                            shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                            shru?: (numBits: number | import("long")) => import("long");
                            shr_u?: (numBits: number | import("long")) => import("long");
                            rotateLeft?: (numBits: number | import("long")) => import("long");
                            rotl?: (numBits: number | import("long")) => import("long");
                            rotateRight?: (numBits: number | import("long")) => import("long");
                            rotr?: (numBits: number | import("long")) => import("long");
                            subtract?: (subtrahend: string | number | import("long")) => import("long");
                            sub?: (subtrahend: string | number | import("long")) => import("long");
                            toInt?: () => number;
                            toNumber?: () => number;
                            toBytes?: (le?: boolean) => number[];
                            toBytesLE?: () => number[];
                            toBytesBE?: () => number[];
                            toSigned?: () => import("long");
                            toString?: (radix?: number) => string;
                            toUnsigned?: () => import("long");
                            xor?: (other: string | number | import("long")) => import("long");
                        };
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        blocksPerYear?: {
                            high?: number;
                            low?: number;
                            unsigned?: boolean;
                            add?: (addend: string | number | import("long")) => import("long");
                            and?: (other: string | number | import("long")) => import("long");
                            compare?: (other: string | number | import("long")) => number;
                            comp?: (other: string | number | import("long")) => number;
                            divide?: (divisor: string | number | import("long")) => import("long");
                            div?: (divisor: string | number | import("long")) => import("long");
                            equals?: (other: string | number | import("long")) => boolean;
                            eq?: (other: string | number | import("long")) => boolean;
                            getHighBits?: () => number;
                            getHighBitsUnsigned?: () => number;
                            getLowBits?: () => number;
                            getLowBitsUnsigned?: () => number;
                            getNumBitsAbs?: () => number;
                            greaterThan?: (other: string | number | import("long")) => boolean;
                            gt?: (other: string | number | import("long")) => boolean;
                            greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                            gte?: (other: string | number | import("long")) => boolean;
                            ge?: (other: string | number | import("long")) => boolean;
                            isEven?: () => boolean;
                            isNegative?: () => boolean;
                            isOdd?: () => boolean;
                            isPositive?: () => boolean;
                            isZero?: () => boolean;
                            eqz?: () => boolean;
                            lessThan?: (other: string | number | import("long")) => boolean;
                            lt?: (other: string | number | import("long")) => boolean;
                            lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                            lte?: (other: string | number | import("long")) => boolean;
                            le?: (other: string | number | import("long")) => boolean;
                            modulo?: (other: string | number | import("long")) => import("long");
                            mod?: (other: string | number | import("long")) => import("long");
                            rem?: (other: string | number | import("long")) => import("long");
                            multiply?: (multiplier: string | number | import("long")) => import("long");
                            mul?: (multiplier: string | number | import("long")) => import("long");
                            negate?: () => import("long");
                            neg?: () => import("long");
                            not?: () => import("long");
                            countLeadingZeros?: () => number;
                            clz?: () => number;
                            countTrailingZeros?: () => number;
                            ctz?: () => number;
                            notEquals?: (other: string | number | import("long")) => boolean;
                            neq?: (other: string | number | import("long")) => boolean;
                            ne?: (other: string | number | import("long")) => boolean;
                            or?: (other: string | number | import("long")) => import("long");
                            shiftLeft?: (numBits: number | import("long")) => import("long");
                            shl?: (numBits: number | import("long")) => import("long");
                            shiftRight?: (numBits: number | import("long")) => import("long");
                            shr?: (numBits: number | import("long")) => import("long");
                            shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                            shru?: (numBits: number | import("long")) => import("long");
                            shr_u?: (numBits: number | import("long")) => import("long");
                            rotateLeft?: (numBits: number | import("long")) => import("long");
                            rotl?: (numBits: number | import("long")) => import("long");
                            rotateRight?: (numBits: number | import("long")) => import("long");
                            rotr?: (numBits: number | import("long")) => import("long");
                            subtract?: (subtrahend: string | number | import("long")) => import("long");
                            sub?: (subtrahend: string | number | import("long")) => import("long");
                            toInt?: () => number;
                            toNumber?: () => number;
                            toBytes?: (le?: boolean) => number[];
                            toBytesLE?: () => number[];
                            toBytesBE?: () => number[];
                            toSigned?: () => import("long");
                            toString?: (radix?: number) => string;
                            toUnsigned?: () => import("long");
                            xor?: (other: string | number | import("long")) => import("long");
                        };
                    };
                }): _10.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            coolcat: {
                alloc: {
                    v1beta1: _162.MsgClientImpl;
                };
                catdrop: {
                    v1beta1: _163.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            coolcat: {
                alloc: {
                    v1beta1: {
                        params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                    };
                };
                catdrop: {
                    v1beta1: {
                        moduleAccountBalance(request?: _8.QueryModuleAccountBalanceRequest): Promise<_8.QueryModuleAccountBalanceResponse>;
                        params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                        claimRecord(request: _8.QueryClaimRecordRequest): Promise<_8.QueryClaimRecordResponse>;
                        claimableForAction(request: _8.QueryClaimableForActionRequest): Promise<_8.QueryClaimableForActionResponse>;
                        totalClaimable(request: _8.QueryTotalClaimableRequest): Promise<_8.QueryTotalClaimableResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                        inflation(request?: _12.QueryInflationRequest): Promise<_12.QueryInflationResponse>;
                        annualProvisions(request?: _12.QueryAnnualProvisionsRequest): Promise<_12.QueryAnnualProvisionsResponse>;
                    };
                };
            };
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
