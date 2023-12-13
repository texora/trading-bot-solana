import { ethers } from "ethers";
import {
	BotRouter__factory,
	EqualizerDexRouter__factory,
	IERC20__factory,
	SpookyDexRouter__factory,
	SpookyFactory__factory,
} from "../types/contracts";

export async function instantiateBotRouter(
	contractAdress: string,
	rpc: string,
	privateKey: string
) {
	const provider = new ethers.JsonRpcProvider(rpc);
	const walletInstance = new ethers.Wallet(privateKey, provider);
	return BotRouter__factory.connect(contractAdress, walletInstance);
}
export async function instantiateDexRouter(
	contractAdress: string,
	rpc: string,
	privateKey: string
) {
	const provider = new ethers.JsonRpcProvider(rpc);
	const walletInstance = new ethers.Wallet(privateKey, provider);
	return SpookyDexRouter__factory.connect(contractAdress, walletInstance);
}

export async function instantiateERC20Token(
	contractAdress: string,
	rpc: string,
	privateKey: string
) {
	const provider = new ethers.JsonRpcProvider(rpc);
	const walletInstance = new ethers.Wallet(privateKey, provider);
	return IERC20__factory.connect(contractAdress, walletInstance);
}
export async function instantiateEqualizerRouter(
	contractAdress: string,
	rpc: string,
	privateKey: string
) {
	const provider = new ethers.JsonRpcProvider(rpc);
	const walletInstance = new ethers.Wallet(privateKey, provider);
	return EqualizerDexRouter__factory.connect(contractAdress, walletInstance);
}
export async function instantiateSpookyFactory(
	contractAdress: string,
	rpc: string,
	privateKey: string
) {
	const provider = new ethers.JsonRpcProvider(rpc);
	const walletInstance = new ethers.Wallet(privateKey, provider);
	return SpookyFactory__factory.connect(contractAdress, walletInstance);
}
