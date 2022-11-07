/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Uint128, Duration } from "./CWNativeStakedBalanceVoting.types";
export interface CWNativeStakedBalanceVotingMessage {
    contractAddress: string;
    sender: string;
    stake: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    unstake: ({ amount }: {
        amount: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ duration, manager, owner }: {
        duration?: Duration;
        manager?: string;
        owner?: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    claim: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class CWNativeStakedBalanceVotingMessageComposer implements CWNativeStakedBalanceVotingMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    stake: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    unstake: ({ amount }: {
        amount: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ duration, manager, owner }: {
        duration?: Duration;
        manager?: string;
        owner?: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    claim: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
