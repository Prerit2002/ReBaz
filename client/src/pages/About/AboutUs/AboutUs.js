import React from 'react';
import { ONavbar } from '../../../pages/About/ONavbar/Navbar';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Image1 from "../../../assets/Gift.svg";
import Image4 from "../../../assets/Image4.svg";
import Image3 from "../../../assets/Discount_Tag.svg";
import Left_One from "../../../assets/Left.svg";
import Middle from "../../../assets/Right.svg";

export const AboutUs = () => {
    return (
        <>
            <ONavbar />
            <div className='pt-6 bg-white'>
            </div>
            <div className='py-5 pb-20 bg-white'>
                <h2 className='text-6xl text-center font-bold tracking-wide'>About <span className='text-6xl text-center font-bold tracking-wide text-indigo-600'>Us</span></h2>
                <div className='grid grid-cols-6 gap-4'>
                    <div className='col-start-2 col-span-4'>
                        <p className='text-center text-2xl mt-10'>Samarth is a project that aims to provide employment opportunities for persons with different types of disabilities. Society has had a reflectance towards people with disabilities and has had reservations about them becoming self-sufficient parts of the community.</p>

                        <p className='text-center text-2xl mt-10'>This idea comes from a very personal space for us, as seeing the plight of people with being unable to express themselves in the corporate world is very saddening; there are not a lot of resources for the same.</p>
                    </div>
                </div>
            </div>
            <AnimatedOnScroll animationIn="bounceInLeft" animationOut="fadeOut">
                <div className='pt-10'>
                    <h2 className='text-6xl text-center font-bold tracking-wide mt-10'>Our <span className='text-6xl text-center font-bold tracking-wide text-indigo-600 mt-10'>Mission</span></h2>
                    <div className='grid grid-cols-6 gap-4'>
                        <img src={Middle} alt='img' className='mt-20 h-96' />
                        <div className='col-start-2 col-span-4'>
                            <p className='text-center text-2xl mt-10'>Employment means being committed to participation in an activity with others and an occupational identity. For people with a disability, such aspects are even more important, largely because these individuals have become an increasingly marginalized group in contemporary working life, with its great demands for education, flexibility, and productivity.</p>

                            <p className='text-center text-2xl mt-10'>At Samarth, we intend to support people with disability by giving them opportunities rather than sympathy. They want to feel that they are needed by others and that what they do is meaningful, in both their own eyes and in the eyes of others. We want to give them this opportunity to show their potential.</p>

                        </div>
                        <img src={Left_One} alt='img' className='mt-20 h-96' />
                    </div>
                </div>
            </AnimatedOnScroll>
            <div className='py-5 pt-10 mt-16 bg-white'>
                <h2 className='text-6xl text-center font-bold tracking-wide'>Why to<span className='text-6xl text-center font-bold tracking-wide text-indigo-600'> Use?</span></h2>
                <div className='grid grid-cols-3 gap-4 ml-5 mb-24'>
                    <div class="max-w-sm rounded-lg overflow-hidden border-indigo-700 border-2 mt-14">
                        <div class="px-6 py-4">
                            <img src={Image1} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Fast Delivery</div>
                            <p class="text-gray-700 text-base text-center">
                                Get goods deliverd to your location securly and at affordale costs. You can also pick up the groods from the pickup option.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-sm rounded-lg overflow-hidden border-indigo-700 border-2 mt-14">
                        <div class="px-6 py-4">
                            <img src={Image3} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Huge Discount</div>
                            <p class="text-gray-700 text-base text-center">
                                Get amazing discounts and huge deals on a variety of products. Local goods at an afforadble price.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-sm rounded-lg overflow-hidden border-indigo-700 border-2 mt-14">
                        <div class="px-6 py-4">
                            <img src={Image4} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Secure Payments</div>
                            <p class="text-gray-700 text-base text-center">
                                Secure your payments using blockchain technology. Hastle free safe and secure payments for both buyers and sellers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-16 bg-white'>
            </div>
        </>
    );
};
