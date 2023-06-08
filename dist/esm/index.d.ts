export interface ProviderOptions {
    web3Instance?: any | undefined;
    ethersProvider?: any | undefined;
}
interface Erc20TokensBalancesRequestBase {
    contractAddresses: string[];
    providerOptions: ProviderOptions;
    multicallCustomContractAddress?: string;
    formatBalances?: boolean;
}
export interface SingleEthereumAddressRequest extends Erc20TokensBalancesRequestBase {
    ethereumAddress: string;
}
export interface MultipleEthereumAddressRequest extends Erc20TokensBalancesRequestBase {
    ethereumAddresses: string[];
}
export interface Token {
    contractAddress: string;
    decimals: number;
    symbol: string;
    name: string;
    balance: string;
}
export interface BalanceResult {
    ethereumAddress: string;
    tokens: Token[];
}
/**
 * Get balances for the user for all contracts in 1 single jsonrpc call
 * @param request The erc20 token balance request
 */
export declare function getBalancesForEthereumAddress(request: SingleEthereumAddressRequest): Promise<BalanceResult>;
/**
 * Get balances for all users for all contracts in 1 single jsonrpc call
 * @param request The erc20 token balance request
 */
export declare function getBalancesForEthereumAddresses(request: MultipleEthereumAddressRequest): Promise<BalanceResult[]>;
export {};
