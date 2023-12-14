import { Bot, CommandContext, Context } from "grammy";
import { showDeployedTokenHandler } from "../handlers/showDeployedTokens";
import { MyContext } from "../bot";
import { TradingMenu, settingMenu } from "../views";
import { setSessions } from "../handlers";
import { fetchNewUserById } from "../models";
import { CreateWallet, getGasPrice, getWalletAddress } from "../web3";
import { makeCopiable } from "../utils";

const { EthBalance } = new CreateWallet();
export async function tradepanelContoller(_ctx: MyContext) {
	await setSessions(_ctx);
	const userId = _ctx.chat.id.toString()!;
	//get gas
	const gasPrice = await getGasPrice(process.env.RPC);
	const newuserData = await fetchNewUserById(userId);
	const walletAddress = await getWalletAddress(newuserData.privateKey);
	const NativeBalance = await EthBalance(walletAddress);
	const { autoBuy, slippage } = newuserData;
	const amountofTrades = 0;
	await _ctx.reply(
		`💮 Snow Trading Bot ⬩ Sniper ⬩ Copytrade ⬩ More \n  \nChain: FTM\n🚗 Gas price: ${gasPrice} GWEI \n \n💳 Wallet Address: \n${makeCopiable(
			walletAddress
		)} \n \n💰Balance:\n${NativeBalance} FTM \n  \nSlippage 📉: ${
			slippage ? slippage : "No Slippage"
		} `,
		{
			reply_markup: TradingMenu,
			parse_mode: "HTML",
		}
	);
}
