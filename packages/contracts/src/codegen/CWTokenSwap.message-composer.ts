/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { ExecuteMsg, Uint128, Binary, Cw20ReceiveMsg, TokenInfo, InstantiateMsg, Counterparty, QueryMsg, Addr, CheckedTokenInfo, StatusResponse, CheckedCounterparty } from "./CWTokenSwap.types";
export interface CWTokenSwapMessage {
  contractAddress: string;
  sender: string;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  fund: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  withdraw: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class CWTokenSwapMessageComposer implements CWTokenSwapMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receive = this.receive.bind(this);
    this.fund = this.fund.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  receive = ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          receive: {
            amount,
            msg,
            sender
          }
        })),
        funds
      })
    };
  };
  fund = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          fund: {}
        })),
        funds
      })
    };
  };
  withdraw = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          withdraw: {}
        })),
        funds
      })
    };
  };
}