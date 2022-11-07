/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
export interface CWNamedGroupsMessage {
    contractAddress: string;
    sender: string;
    update: ({ addressesToAdd, addressesToRemove, group }: {
        addressesToAdd?: string[];
        addressesToRemove?: string[];
        group: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeGroup: ({ group }: {
        group: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateOwner: ({ owner }: {
        owner: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class CWNamedGroupsMessageComposer implements CWNamedGroupsMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    update: ({ addressesToAdd, addressesToRemove, group }: {
        addressesToAdd?: string[];
        addressesToRemove?: string[];
        group: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeGroup: ({ group }: {
        group: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateOwner: ({ owner }: {
        owner: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
