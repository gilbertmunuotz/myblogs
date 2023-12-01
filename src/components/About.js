import Footer from './Footer'
import { motion } from "framer-motion";

const myvariants = {
    before: {
        x: '-100vw'
    },
    after: {
        x: 0
    }
}

function About() {
    return (
        <div className='About'>
            <motion.div className="flex justify-center p-4" variants={myvariants} initial="before" animate="after">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="text-white text-3xl md:text-5xl font-medium  my-2">What People are Saying</div>
                    <div className="text-white md:text-xl  my-2 w-3/4">TailBlocks has inspired tens of thousands of Front-end Web
                        Developers</div>
                    <div className=" my-2 flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                        <div>
                            <div className="flex flex-col  justify-center items-center ">
                                <div className="overflow-hidden  m-4 flex flex-col justify-center   bg-gray-900 rounded-xl">

                                    <div className="flex flex-col md:flex-row items-center justify-center   ">
                                        <div className="  items-center justify-center flex py-2">
                                            <div className="flex flex-col  items-center justify-center text-center">

                                                <div className="text-stone-200  m-2 px-8 text-xl">Tailblocks provides best Tailwind
                                                    CSS
                                                    Components and Blocks to create an unique websites within minutes. It has
                                                    upto
                                                    60+ free components for front-end Web Development.</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-6 w-6 bg-gray-900 -mt-8 mb-4 origin-center rotate-45"></div>
                                <div className="flex flex-col  items-center justify-center">

                                    <img src="https://source.unsplash.com/100x100/?man,boy" alt=""
                                        className="rounded-full h-20 w-20" />
                                    <div className="text-white text-sm font-medium">John Doe, CEO</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col  justify-center items-center ">
                                <div className="overflow-hidden  m-4 flex flex-col justify-center   bg-gray-900 rounded-xl">

                                    <div className="flex flex-col md:flex-row items-center justify-center   ">
                                        <div className="  items-center justify-center flex py-2">
                                            <div className="flex flex-col  items-center justify-center text-center">

                                                <div className="text-stone-200  m-2 px-8 text-xl">Tailblocks provides best Tailwind
                                                    CSS
                                                    Components and Blocks to create an unique websites within minutes. It has
                                                    upto
                                                    60+ free components for front-end Web Development.</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-6 w-6 bg-gray-900 -mt-8 mb-4 origin-center rotate-45"></div>
                                <div className="flex flex-col  items-center justify-center">

                                    <img src="https://source.unsplash.com/100x100/?girl" alt=""
                                        className="rounded-full h-20 w-20" />
                                    <div className="text-white text-sm font-medium">Jessica Jones, SEO Executive</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col  justify-center items-center ">
                                <div className="overflow-hidden  m-4 flex flex-col justify-center   bg-gray-900 rounded-xl">

                                    <div className="flex flex-col md:flex-row items-center justify-center   ">
                                        <div className="  items-center justify-center flex py-2">
                                            <div className="flex flex-col  items-center justify-center text-center">

                                                <div className="text-stone-200  m-2 px-8 text-xl">Tailblocks provides best Tailwind
                                                    CSS
                                                    Components and Blocks to create an unique websites within minutes. It has
                                                    upto
                                                    60+ free components for front-end Web Development.</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-6 w-6 bg-gray-900 -mt-8 mb-4 origin-center rotate-45"></div>
                                <div className="flex flex-col  items-center justify-center">

                                    <img src="https://source.unsplash.com/100x100/?woman" alt=""
                                        className="rounded-full h-20 w-20" />
                                    <div className="text-white text-sm font-medium">Sierra, Front-End Dev</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="flex items-center justify-center text-center">
                <div className="flex flex-col p-2 m-2  max-w-7xl">
                    <div className="text-3xl font-medium">Meet Our Team</div>
                    <div className="text-sm mx-2 md:text-xl text-stone-500">Meet the team member who have contributed their designs for this websites.</div>
                    <div className="text-sm mx-2 md:text-xl mb-2 text-stone-500">Resource person of Tailblocks communinty</div>
                    <div className="flex items-center justify-center md:flex-row flex-col space-x-4  p-2">
                        <motion.div className="flex items-center ml-4 md:ml-0 space-x-2 px-6 py-2 md:w-1/3 w-full" whileHover={{ scale: 1.1 }} >
                            <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                                <img src="https://source.unsplash.com/300x300/?man,businessman" alt="" className="" />
                            </div>
                            <div className="flex-col">
                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">John Doe</div>
                                <div className=" italic text-gray-500">CEO, Tailblocks</div>
                            </div>
                        </motion.div>
                        <motion.div className="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full" whileHover={{ scale: 1.1 }} >
                            <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">

                                <img src="https://source.unsplash.com/300x300/?boy" alt="" className="" />
                            </div>
                            <div className="flex-col">

                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Arkay</div>
                                <div className=" italic text-gray-500">Executive </div>
                            </div>
                        </motion.div>
                        <motion.div className="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full" whileHover={{ scale: 1.1 }} >
                            <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">

                                <img src="https://source.unsplash.com/300x300/?girl" alt="" className="" />
                            </div>
                            <div className="flex-col">

                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Elina Gilbert</div>
                                <div className=" italic text-gray-500">HR</div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex space-x-4  p-2 items-center justify-center md:flex-row flex-col ">
                        <motion.div className="flex items-center ml-4 md:ml-0 space-x-2 px-6 py-2 md:w-1/3 w-full" whileHover={{ scale: 1.1 }} >
                            <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">

                                <img src="https://source.unsplash.com/300x300/?kid" alt="" className="" />
                            </div>
                            <div className="flex-col">

                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Clay Johnson</div>
                                <div className=" italic text-gray-500">Manager</div>
                            </div>
                        </motion.div>
                        <motion.div className="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full" whileHover={{ scale: 1.1 }} >
                            <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">

                                <img src="https://source.unsplash.com/300x300/?girl,woman" alt="" className="" />
                            </div>
                            <div className="flex-col">

                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Hannah Saw</div>
                                <div className=" italic text-gray-500">Marketing </div>
                            </div>
                        </motion.div>
                        <motion.div className="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full" whileHover={{ scale: 1.1 }} >
                            <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">

                                <img src="https://source.unsplash.com/300x300/?woman" alt="" className="" />
                            </div>
                            <div className="flex-col">

                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Wednesday </div>
                                <div className=" italic text-gray-500">Financer</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <Footer />
        </div>
    )
}

export default About