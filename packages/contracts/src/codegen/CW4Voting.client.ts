/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { DaoResponse, ExecuteMsg, MemberDiff, GroupContractResponse, InfoResponse, ContractVersion, InstantiateMsg, Member, MigrateMsg, QueryMsg, Uint128, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse } from "./CW4Voting.types";
export interface CW4VotingReadOnlyInterface {
  contractAddress: string;
  groupContract: () => Promise<GroupContractResponse>;
  dao: () => Promise<DaoResponse>;
  votingPowerAtHeight: ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }) => Promise<VotingPowerAtHeightResponse>;
  totalPowerAtHeight: ({
    height
  }: {
    height?: number;
  }) => Promise<TotalPowerAtHeightResponse>;
  info: () => Promise<InfoResponse>;
}
export class CW4VotingQueryClient implements CW4VotingReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.groupContract = this.groupContract.bind(this);
    this.dao = this.dao.bind(this);
    this.votingPowerAtHeight = this.votingPowerAtHeight.bind(this);
    this.totalPowerAtHeight = this.totalPowerAtHeight.bind(this);
    this.info = this.info.bind(this);
  }

  groupContract = async (): Promise<GroupContractResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      group_contract: {}
    });
  };
  dao = async (): Promise<DaoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      dao: {}
    });
  };
  votingPowerAtHeight = async ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }): Promise<VotingPowerAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      voting_power_at_height: {
        address,
        height
      }
    });
  };
  totalPowerAtHeight = async ({
    height
  }: {
    height?: number;
  }): Promise<TotalPowerAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_power_at_height: {
        height
      }
    });
  };
  info = async (): Promise<InfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {}
    });
  };
}
export interface CW4VotingInterface extends CW4VotingReadOnlyInterface {
  contractAddress: string;
  sender: string;
  memberChangedHook: ({
    diffs
  }: {
    diffs: MemberDiff[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class CW4VotingClient extends CW4VotingQueryClient implements CW4VotingInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.memberChangedHook = this.memberChangedHook.bind(this);
  }

  memberChangedHook = async ({
    diffs
  }: {
    diffs: MemberDiff[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      member_changed_hook: {
        diffs
      }
    }, fee, memo, funds);
  };
}