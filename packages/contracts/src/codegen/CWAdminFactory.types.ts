/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type ExecuteMsg = {
  instantiate_contract_with_self_admin: {
    code_id: number;
    instantiate_msg: Binary;
    label: string;
    [k: string]: unknown;
  };
};
export type Binary = string;
export interface InstantiateMsg {
  [k: string]: unknown;
}
export type CWAdminFactoryExecuteMsg = ExecuteMsg;