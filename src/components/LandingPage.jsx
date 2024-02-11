function LandingPage() {
    return (
        <div className="bg-white ">
            <div className="px-[40px] min-[1200px]:px-[100px]">

                {/*Loglife Log Your Active Life section */}
                <div className="md:flex items-center pt-[50px] md:pt-[100px]">
                    <div className="flex-1">
                        <img src="https://img5.pic.in.th/file/secure-sv1/walk.png" alt="walk.png" border="0" className="w-[500px] min-[1680px]:w-[700px] mx-auto" />
                    </div>
                    <div className="flex-1 text-center md:ml-5">
                        <div>
                            <h2 className="font-medium text-3xl lg:text-4xl my-10 px-[4px] md:px-[0px]">Loglife Log Your Active Life</h2>
                            <p className="text-lg lg:text-2xl font-light my-10 lg:px-10">
                                Finished your active session? Let’s log your progress with LogLife. Fast and easy you will be amazed!
                            </p>
                        </div>
                        <div className="my-10">
                            <a href="/login" className="btn btn-ghost mx-3 text-base lg:text-xl">
                                Login
                            </a>
                            <a href="/signup"
                                className="btn btn-primary mx-3 text-base text-white lg:text-xl">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>

                {/*Keep You Motivate section */}
                <div className="my-[90px] md:my-[150px] first-letter:min-[1680px]:my-[200px] md:flex items-center">
                    <div className="flex-1 text-center md:mr-5">
                        <div>
                            <h2 className="font-medium text-3xl lg:text-4xl my-10">Keep You Motivate</h2>
                            <p className="text-lg lg:text-2xl font-light my-10 lg:px-10 md:pb-16">
                                Your emotion, displayed. Log your emotional state after each activity and see how far your body has become.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src="https://img2.pic.in.th/pic/phone.png" alt="phone" border="0" className="w-[200px] min-[1200px]:w-[300px] min-[1680px]:w-[400px] rotate-[17deg] mx-auto" />
                    </div>
                </div>

                {/*Be a Better You section */}
                <div className="my-[90px] md:my-[150px] min-[1680px]:my-[200px] md:flex items-center">
                    <div className="hidden md:contents">
                        <div className="flex-1 min-[1200px]:bg-gray-200 py-[40px] rounded-xl md:mr-5">
                            <img src="https://img2.pic.in.th/pic/Slice-7.png" alt="walk.png" border="0" className="m-auto w-[350px] min-[1680px]:w-[500px]" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:ml-5">
                        <div>
                            <h2 className="font-medium text-3xl lg:text-4xl my-10">Be a Better You!</h2>
                            <p className="text-lg lg:text-2xl font-light my-10 lg:px-10">
                                Each day is the better day for your health! Log your life
                                with LogLife and let’s build
                                a better you together!
                            </p>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <div className="flex-1 min-[1200px]:bg-gray-200 rounded-xl md:mr-5">
                            <img src="https://img2.pic.in.th/pic/Slice-7.png" alt="walk.png" border="0" className="m-auto w-[350px] min-[1680px]:w-[500px]" />
                        </div>
                    </div>
                </div>

                {/*hiking section */}
                <div className="my-[90px] md:my-[150px] min-[1680px]:my-[200px] md:flex items-center">
                    <div className="flex-1 md:py-[0px] md:mr-5">
                        <h2 className="font-medium text-3xl lg:text-4xl my-10 md:hidden text-center">Challenge With Activities You Love</h2>
                        <img src="https://img5.pic.in.th/file/secure-sv1/hiking.png" alt="walk.png" border="0" className="w-[500px] min-[1680px]:w-[600px] mx-auto" />
                    </div>
                    <div className="flex-1 text-center md:ml-5">
                        <div>
                            <h2 className="font-medium text-3xl lg:text-4xl my-10 hidden md:contents">Challenge With Activities You Love</h2>
                            <p className="text-lg lg:text-2xl font-light my-10 lg:px-10">
                                Running, cycling, swimming, walking,
                                hiking or perhaps something else?
                            </p>
                        </div>
                    </div>
                </div>

                {/*cycling section */}
                <div className="my-[90px] md:my-[150px] min-[1680px]:my-[200px] md:flex items-center">
                    <div className="flex-1 text-center">
                        <div className="hidden md:contents text-center">
                            <p className="text-lg lg:text-2xl font-light my-10 lg:px-10">
                                Discover a new way to track your fitness progress with our comprehensive activity logging website!
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 md:py-[0px]">
                        <img src="https://img5.pic.in.th/file/secure-sv1/cycling.png" alt="walk.png" border="0" className="w-[400px] min-[1680px]:w-[550px] mx-auto" />
                    </div>
                    <div className="md:hidden text-center">
                        <p className="text-lg lg:text-2xl font-light my-10 lg:px-10">
                            Discover a new way to track your fitness progress with our comprehensive activity logging website!
                        </p>
                    </div>
                </div>

                {/*running section */}
                <div className="my-[90px] md:my-[150px] min-[1680px]:my-[200px] md:flex items-center">
                    <div className="flex-1 md:py-[0px] md:mr-5">
                        <img src="https://img2.pic.in.th/pic/run.png" alt="walk.png" border="0" className="w-[250px] md:w-[300px] min-[1680px]:w-[400px] pl-[10px] md:pl-[0px] mx-auto" />
                    </div>
                    <div className="flex-1 text-center md:ml-5">
                        <div>
                            <p className="text-lg lg:text-2xl font-light my-10 lg:px-10">
                                Join our community today and start your adventure towards a healthier, happier you!
                            </p>
                        </div>
                    </div>
                </div>

                {/* How did you feel section */}
                <div className="my-[90px] md:my-[150px] min-[1680px]:my-[200px]">
                    <div className="text-center">
                        <div>
                            <h2 className="font-medium text-3xl lg:text-4xl my-10 text-center">How did you feel?</h2>
                            <p className="text-lg lg:text-2xl font-light my-10 lg:px-[100px] min-[1680px]:px-[200px]">
                                After your activities, will help you explore the meanings behind different emotional colors.
                                Our platform is here to make understanding and tracking your feelings easy and enjoyable!
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-10 min-[1680px]:px-[200px] py-5 md:py-10">
                        <img src="https://img2.pic.in.th/pic/very-strong.png" alt="very-strong.png" border="0" className="w-[250px] min-[1200px]:w-[300px]" />
                        <img src="https://img2.pic.in.th/pic/strong.png" alt="strong.png" border="0" className="w-[250px] min-[1200px]:w-[300px]" />
                        <img src="https://img2.pic.in.th/pic/nomal.png" alt="normal.png" border="0" className="w-[250px] min-[1200px]:w-[300px]" />
                        <img src="https://img5.pic.in.th/file/secure-sv1/weak.png" alt="weak.png" border="0" className="w-[250px] min-[1200px]:w-[300px]" />
                        <img src="https://img5.pic.in.th/file/secure-sv1/very-weak.png" alt="very-weak.png" border="0" className="w-[250px] min-[1200px]:w-[300px]" />
                    </div>
                </div>

                {/*7 Simple Steps section */}
                <div className="my-[90px] md:my-[150px] min-[1680px]:my-[200px]">
                    <div>
                        <h2 className="font-medium text-3xl lg:text-4xl my-10 text-center">Capture Your Moments: 7 Simple Steps</h2>
                    </div>

                    {/* step 1 */}
                    <div className="mb-[90px] min-[1680px]:my-[150px]">
                        <div className="md:flex md:items-center">
                            <div className="md:hidden">
                                <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 1</h3>
                            </div>
                            <div className="md:flex-1">
                                <img src="https://img2.pic.in.th/pic/Slice-8.png" alt="Slice-8.png" border="0" className="mx-auto my-5 md:my-0 md:px-10" />
                            </div>
                            <div className="md:flex-1">
                                <div className="hidden md:contents">
                                    <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 1</h3>
                                </div>
                                <p className="text-lg lg:text-2xl font-light my-4 md:my-10 md:px-10 min-[1680px]:px-20">
                                    Begin by
                                    <span className="font-medium text-primary hover:underline"><a href="/login" target="_blank"> logging in </a></span>
                                    to your account or
                                    <span className="font-medium text-primary hover:underline"><a href="/signup" target="_blank"> signing up </a></span>
                                    if you're a new user.</p>
                            </div>
                        </div>
                    </div>

                    {/* step 2 */}
                    <div className="my-[90px] min-[1680px]:my-[150px]">
                        <div className="md:flex items-center">
                            <div className="md:hidden">
                                <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 2</h3>
                            </div>
                            <div className="md:flex-1">
                                <img src="https://img2.pic.in.th/pic/nav.png" alt="Slice-8.png" border="0" className="mx-auto my-7 md:my-0 md:px-10" />
                            </div>
                            <div className="md:flex-1">
                                <div className="hidden md:contents">
                                    <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 2</h3>
                                </div>
                                <p className="text-lg lg:text-2xl font-light my-4 md:my-10 md:px-10 min-[1680px]:px-20">Press the
                                    <span className="font-medium text-primary"> "Create Activity" </span>
                                    button to start documenting your experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* step 3 */}
                    <div className="my-[90px] min-[1680px]:my-[150px]">
                        <div className="md:flex items-center">
                            <div className="md:hidden">
                                <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 3</h3>
                            </div>
                            <div className="md:flex-1">
                                <img src="https://uppic.cloud/ib/wOkKQ65M0d.png" alt="Slice-8.png" border="0" className="mx-auto my-7 md:my-0 md:px-10" />
                            </div>
                            <div className="md:flex-1">
                                <div className="hidden md:contents">
                                    <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 3</h3>
                                </div>
                                <p className="text-lg lg:text-2xl font-light my-4 md:my-10 md:px-10 min-[1680px]:px-20">Enter the
                                    <span className="font-medium text-primary"> activity's title </span>to concisely describe your activity</p>
                            </div>
                        </div>
                    </div>


                    {/* step 4 */}
                    <div className="my-[90px] min-[1680px]:my-[150px]">
                        <div className="md:flex items-center">
                            <div className="md:hidden">
                                <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 4</h3>
                            </div>
                            <div className="md:flex-1">
                                <img src="https://uppic.cloud/ib/5a92uNWPPh.png" alt="Slice-8.png" border="0" className="mx-auto my-5 md:my-0 md:px-10" />
                            </div>
                            <div className="md:flex-1">
                                <div className="hidden md:contents">
                                    <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 4</h3>
                                </div>
                                <p className="text-lg lg:text-2xl font-light md:my-10 md:px-10 min-[1680px]:px-20">Provide a brief
                                    <span className="font-medium text-primary"> description </span>detailing what happened during the activity,
                                    or expressing your emotions and thoughts.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* step 5 */}
                    <div className="my-[90px] min-[1680px]:my-[150px]">
                        <div className="md:flex items-center">
                            <div className="md:hidden">
                                <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 5</h3>
                            </div>
                            <div className="md:flex-1">
                                <img src="https://uppic.cloud/ib/isAqFLa961.png" alt="Slice-8.png" border="0" className="mx-auto my-5 md:my-0 md:px-10" />
                            </div>
                            <div className="md:flex-1">
                                <div className="hidden md:contents">
                                    <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 5</h3>
                                </div>
                                <p className="text-lg lg:text-2xl font-light md:my-10 md:px-10 min-[1680px]:px-20">Choose the
                                    <span className="font-medium text-primary"> type of activity </span>
                                    to categorize your experience effectively.</p>
                            </div>
                        </div>
                    </div>


                    {/* step 6 */}
                    <div className="my-[90px] min-[1680px]:my-[150px]">
                        <div className="md:flex items-center">
                            <div className="md:hidden">
                                <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 6</h3>
                            </div>
                            <div className="md:flex-1">
                                <img src="https://uppic.cloud/ib/ohdZkZUnKP.png" alt="Slice-8.png" border="0" className="mx-auto my-7 md:my-0 md:px-10" />
                            </div>
                            <div className="flex-1">
                                <div className="hidden md:contents">
                                    <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 6</h3>
                                </div>
                                <p className="text-lg lg:text-2xl font-light md:my-10 md:px-10 min-[1680px]:px-20">Specify the
                                    <span className="font-medium text-primary"> date and time </span> when the activity took place,
                                    ensuring accurate record-keeping.</p>
                            </div>
                        </div>
                    </div>


                    {/* step 7 */}
                    <div className="my-[90px] min-[1680px]:my-[150px]">
                        <div className="md:flex items-center">
                            <div className="md:hidden">
                                <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 7</h3>
                            </div>
                            <div className="md:flex-1">
                                <img src="https://uppic.cloud/ib/hmuTms9s14.png" alt="Slice-8.png" border="0" className="mx-auto my-8 md:my-0 md:px-10" />
                            </div>
                            <div className="md:flex-1">
                                <div className="hidden md:contents">
                                    <h3 className="font-medium text-3xl lg:text-4xl text-primary my-4 md:my-10 md:px-10 min-[1680px]:px-20">Step 6</h3>
                                </div>
                                <p className="text-lg lg:text-2xl font-light md:my-10 md:px-10 min-[1680px]:px-20">Choose the
                                    <span className="font-medium text-primary"> emotion </span> that reflects your post-activity feelings,
                                    enriching your reflection and narrative</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default LandingPage;