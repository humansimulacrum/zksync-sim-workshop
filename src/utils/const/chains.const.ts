export class Chain {
  name: string;
  chainId: number;
  rpc: string;
  explorer: string;
  token: string;

  constructor({ name, chainId, rpc, explorer, token }) {
    this.name = name;
    this.chainId = chainId;
    this.rpc = rpc;
    this.explorer = explorer;
    this.token = token;
  }
}

export const ETH = new Chain({
  name: 'ETH',
  chainId: 1,
  rpc: 'https://rpc.ankr.com/eth',
  explorer: 'https://etherscan.io/tx',
  token: 'ETH',
});

export const OP = new Chain({
  name: 'OP',
  chainId: 10,
  rpc: 'https://rpc.ankr.com/optimism',
  explorer: 'https://optimistic.etherscan.io/tx',
  token: 'ETH',
});

export const BSC = new Chain({
  name: 'BSC',
  chainId: 56,
  rpc: 'https://rpc.ankr.com/bsc',
  explorer: 'https://bscscan.com/tx',
  token: 'BNB',
});

export const POLYGON = new Chain({
  name: 'POLYGON',
  chainId: 137,
  rpc: 'https://rpc.ankr.com/polygon',
  explorer: 'https://polygonscan.com/tx',
  token: 'MATIC',
});

export const ARB = new Chain({
  name: 'ARB',
  chainId: 42161,
  rpc: 'https://rpc.ankr.com/arbitrum',
  explorer: 'https://arbiscan.io/tx',
  token: 'ETH',
});

export const NOVA = new Chain({
  name: 'NOVA',
  chainId: 42170,
  rpc: 'https://rpc.ankr.com/arbitrumnova',
  explorer: 'https://nova.arbiscan.io/tx',
  token: 'ETH',
});

export const ERA = new Chain({
  name: 'ERA',
  chainId: 324,
  rpc: 'https://rpc.ankr.com/zksync_era',
  explorer: 'https://explorer.zksync.io/tx',
  token: 'ETH',
});
