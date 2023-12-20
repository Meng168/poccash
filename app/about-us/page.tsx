import AboutDescription from '@/components/about/AboutDescription';
import Vision from '@/components/about/Vision';
import Wrapper from '@/components/navbar/Wrapper';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us',
}

const AboutUsPage = () => {
    return (
        <Wrapper>
            <div className='w-[1920px]'>
                <div className='bg-color-primary w-full h-[133px] pt-[40.73px] pl-[795px] pb-[35px]'>
                    <h2 className='w-[179px] h-[57.273px] text-white text-center text-[35px] font-medium inline-flex align-baseline'>About Us</h2>
                </div>
                <AboutDescription />
                <Vision />
            </div>
        </Wrapper>
    );
}

export default AboutUsPage;
