"use client"

import dynamic from 'next/dynamic'
const CountUp = dynamic(() => import('react-countup'))

const AboutDescription = () => {
    return (
        <div className='h-[784px] w-[1728px]'>
            <h6 className="text-color-primary text-[40px] font-semibold text-center w-[258px] h-[63px] mt-[72px] ml-[446px]">PocCash</h6>
            <span className="text-color-primary text-font-15 font-normal text-center w-[164px] ml-[510px] mt-[132px]">Our Commit to you</span>
            <div className="mt-[29px] pl-[488px] pr-[520px] h-[457px]">
                <p className="text-font-16 text-color-secondary font-normal leading-[24px]">With 500 new and refreshed listings added daily, we’re committed to helping buyers and <br /> sellers across the US get deals done - but we’re so much more than a classifieds website.</p>
                <br />
                <p className="text-font-14 text-color-gray font-medium leading-[24px]">BizBen is the only comprehensive nationwide business listing service, and we built our business <br /> exchange network to educate, support, and connect buyers, sellers, brokers, agents, and advisors.</p>
                <br />
                <p className="text-font-14 text-color-gray font-medium leading-[24px]">Our proven platform, trusted for over 25 years, provides everything buyers and sellers need to <br /> complete a successful business transaction. Users can publish ‘wanted to buy’ and ‘for sale’ postings <br /> to our site, which gets thousands of visits per day, and that’s just the beginning.</p>
                <br />
                <p className="text-font-14 text-color-gray font-medium leading-[24px]">Members of the BizBen network also have access to tons of educational content, including blog and <br /> discussion posts, podcasts, expert write-ups and interviews, and more. We also offer a broad range of <br /> expert advisory services that cater to all experience levels, from first-time business buyers and sellers <br /> to serial entrepreneurs.</p>
                <br />
                <p className="text-font-14 text-color-gray font-medium leading-[24px]">Our vast network of trusted advisors makes it easy for buyers and sellers to connect with the right <br /> people at the right stage of the transaction. Above all else, our responsive team of experts is invested <br /> in your success. We’re here to help every step of the way, and our goal is to make sure everyone we <br /> serve is fully satisfied with the outcome of their transaction.</p>
            </div>
            <ul className='flex flex-row pl-[490px] pr-[520px] mt-[45px]'>
                <li className='w-[98px]'>
                    <CountUp
                        start={1}
                        end={8000}
                        duration={2.75}
                        separator=","
                        decimals={0}
                        decimal=","
                        //prefix="EUR "
                        suffix="+"
                        // onEnd={() => console.log('Ended! 👏')}
                        // onStart={() => console.log('Started! 💨')}
                        enableScrollSpy
                    >
                        {({ countUpRef }) => (
                            <div className='h-[38px] mb-[3px]'>
                                <span className='text-color-primary text-font-30 font-semibold font-cerebri' ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <div className="text-color-secondary text-center text-font-14 leading-[24px] font-normal">POSTINGS</div>
                </li>
                <li className='w-[98px] ml-[172px] mr-[201px]'>
                    <CountUp
                        start={1}
                        end={2500}
                        duration={2.75}
                        separator=","
                        decimals={0}
                        decimal=","
                        //prefix="EUR "
                        suffix="+"
                        // onEnd={() => console.log('Ended! 👏')}
                        // onStart={() => console.log('Started! 💨')}
                        enableScrollSpy
                    >
                        {({ countUpRef }) => (
                            <div className='h-[38px] mb-[3px]'>
                                <span className='text-color-primary text-font-30 font-semibold font-cerebri' ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <div className="text-color-secondary text-center text-font-14 leading-[24px] font-normal">RESOURCES</div>
                </li>
                <li className='w-[98px]'>
                    <CountUp
                        start={1}
                        end={500}
                        duration={2.75}
                        separator=","
                        decimals={0}
                        decimal=","
                        //prefix="EUR "
                        suffix="+"
                        // onEnd={() => console.log('Ended! 👏')}
                        // onStart={() => console.log('Started! 💨')}
                        enableScrollSpy
                    >
                        {({ countUpRef, start }) => (
                            <div className='h-[38px] mb-[3px]'>
                                <span className='text-color-primary text-font-30 font-semibold font-cerebri' ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <div className="text-color-secondary text-left text-font-14 leading-[24px] w-[233px] font-normal -ml-[73px]">NEW & REFRESHED DAILY LISTINGS</div>
                </li>
            </ul>
        </div >
    )
}

export default AboutDescription;