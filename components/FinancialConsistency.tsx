import BudgetIcon from "./icons/BudgetIcon";
import MoneyCoinIcon from "./icons/MoneyCoinIcon";
import MoneyIcon from "./icons/MoneyIcon";
import MoneyManager from "./icons/MoneyManager";

const FinancialConsistency = () => {
    return (
        <div className="w-[1728px] h-[1432px] bg-[#F4F7FA] flex flex-col items-center">
            <h3 className="text-color-primary text-[40px] -ml-[24px] font-bold w-[655px] h-[128px] leading-[63.75px] mt-[81px]"><span className="inline-flex align-baseline">How can we help to have a good</span> <span className="text-center block">financial consistency ?</span></h3>
            <p className='text-font-30 relative text-color-gray w-[965px] leading-[45px] font-medium mt-[23px] mb-[82px]'>
                There are many ways we can help your to manage your finance
            </p>
            
            <div className="grid grid-cols-2 gap-x-[103px] gap-y-[64px] flex-wrap">
                <div className="flex flex-col">
                    <div className="flex flex-row space-x-[103px]">
                        <div className="w-[447px] h-[426px] rounded-[15px] border border-white bg-white">
                            <div className="flex flex-row items-center pl-[61px] pt-[56px] pb-[45px]">
                                <MoneyIcon />
                                <h2 className="text-color-primary ml-[20px] mt-[23px] text-font-30 leading-[45px] font-medium">Income</h2>
                            </div>
                            <p className="font-medium text-justify ml-[41px] -mt-[6px] leading-normal w-[363px] h-[270px] text-color-gray text-font-20">The incom is a template for a person to record their income in many ways by providing a category for users to select because a person may have various sources of income that can be computed under different heads of Income. </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-row space-x-[103px]">
                        <div className="w-[447px] h-[426px] rounded-[15px] border border-white bg-white">
                            <div className="flex flex-row items-center pl-[61px] pt-[54px] pb-[43px]">
                                <MoneyCoinIcon />
                                <h2 className="text-color-primary ml-[41px] mt-[23px] text-font-30 leading-[45px] font-medium">Expense</h2>
                            </div>
                            <p className="font-medium text-justify ml-[30px] -mt-[6px] leading-normal w-[375px] h-[240px] text-color-gray text-font-20">About the expense transaction is similar to the income section but in this case, the expense is used to track your money to find out what are your spending habits. We recommend adding your transaction right after it occurs so you won’t forget about any of your expenses.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-row space-x-[103px]">
                        <div className="w-[447px] h-[426px] rounded-[15px] border border-white bg-white">
                            <div className="flex flex-row items-center pl-[59px] pt-[52px] pb-[43px]">
                                <BudgetIcon />
                                <h2 className="text-color-primary ml-[22px] mt-[23px] text-font-30 leading-[45px] font-medium">Budget</h2>
                            </div>
                            <p className="font-medium text-justify ml-[32px] -mt-[5px] leading-normal w-[380px] h-[210px] text-color-gray text-font-20">About the budget feature is the same as the saving feature but this feature is about how to take control of your expenses for spending on something. We also let you how much you can spend daily in order to stick to your budget.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-row space-x-[103px]">
                        <div className="w-[447px] h-[426px] rounded-[15px] border border-white bg-white">
                            <div className="flex flex-row items-center pl-[65px] pt-[55px] pb-[43px]">
                                <MoneyManager />
                                <h2 className="text-color-primary ml-[26px] text-font-30 leading-[45px] font-medium">Saving</h2>
                            </div>
                            <p className="font-medium text-justify ml-[29px] -mt-[10px] leading-normal w-[371px] h-[224px] text-color-gray text-font-20">Let’s now look at the next slide which shows the saving feature. If you wish to save money for a new car, a dreamy vacation, or a top university. In the basic plan, you can set your own saving goal by giving it a name and choosing a category.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinancialConsistency;