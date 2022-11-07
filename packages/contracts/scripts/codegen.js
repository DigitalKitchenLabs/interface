import { join, resolve } from 'path';
import codegen from '@cosmwasm/ts-codegen';

const contractsDir = resolve(join(__dirname, '../contracts'));
console.log(contractsDir)
const contracts = [
  {
    name: 'CWAdminFactory',
    dir: join(contractsDir, 'cw-admin-factory')
  },
  {
    name: 'CWCore',
    dir: join(contractsDir, 'cw-core')
  },
  {
    name: 'CWNamedGroups',
    dir: join(contractsDir, 'cw-named-groups')
  },
  {
    name: 'CWNamesRegistry',
    dir: join(contractsDir, 'cw-names-registry')
  },
  {
    name: 'CWNativeStakedBalanceVoting',
    dir: join(contractsDir, 'cw-native-staked-balance-voting')
  },
  {
    name: 'CWProposalMultiple',
    dir: join(contractsDir, 'cw-proposal-multiple')
  },
  {
    name: 'CWProposalSingle',
    dir: join(contractsDir, 'cw-proposal-single')
  },
  {
    name: 'CWTokenSwap',
    dir: join(contractsDir, 'cw-token-swap')
  },
  {
    name: 'CW4Voting',
    dir: join(contractsDir, 'cw4-voting')
  },
  {
    name: 'Profiles',
    dir: join(contractsDir, 'coolcat-profiles')
  }
];

codegen({
  contracts,
  outPath: join(__dirname, '../src/codegen'),
    reactQuery: {
      enabled: true,
      optionalClient: true,
      version: 'v4',
      mutations: true,
      queryKeys: true,
      queryFactory: true,
    },
    recoil: {
      enabled: true
  },
  options: {
    bundle: {
      enabled: true,
      bundleFile: 'index.ts',
      scope: 'contracts'
    },
    types: {
      enabled: true,
      aliasExecuteMsg: true
    },
    client: {
      enabled: true,
      execExtendsQuery: true
    },
    messageComposer: {
      enabled: true
    },

  }
}).then(() => {
  console.log('✨ all done!');
}).catch(e=>{
  console.error(e);
  process.exit(1)
});
