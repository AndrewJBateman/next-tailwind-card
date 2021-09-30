import Head from "next/head";
import NextImage from "next/image";
import NextLink from "next/link";
import {
	FaChevronLeft,
	FaStar,
	FaHeart,
	FaCircle,
	FaMinus,
	FaPlus,
	FaShoppingCart,
} from "react-icons/fa";

import { prefix } from "../utils/prefix";

const About = () => {
	return (
		<>
    			<Head>
				<title>About App</title>
			</Head>
			<div className="flex items-center justify-center h-screen bg-gray-100">
				<div className="flex flex-col w-full max-w-xs space-y-4 duration-300 transform bg-white shadow-lg rounded-xl hover:-translate-y-2">
					<div className="flex flex-row items-center justify-between px-4 pt-4">
						<button
							aria-label="go back"
							className="p-2 duration-150 transform hover:-translate-x-1"
						>
							<FaChevronLeft />
						</button>

						<div className="flex flex-row items-center space-x-4">
							<div className="inline-flex items-center">
								<FaStar className="mr-1 text-yellow-100" />
								<p className="font-medium"></p>
							</div>

							<button
								aria-label="like"
								className="p-2 text-red-400 transition rounded-full hover:bg-red-400 hover:shadow-md hover:text-white"
							>
								<FaHeart />
							</button>
						</div>
					</div>

					<div className="flex justify-center">
						<NextImage
							alt="meter"
							height="224px"
							src={`${prefix}/meter.png`}
							width="224px"
						/>
					</div>

					<div className="flex flex-col px-4 space-y-1">
						<div className="flex flex-col -space-y-0.5">
							<NextLink href="/">
								<a className="font-medium tracking-wide w-max">Tektronix</a>
							</NextLink>
							<p className="text-xs text-gray-500">Meter</p>
						</div>

						<div className="flex flex-row items-center justify-between">
							<div className="flex flex-row items-center space-x-3">
								<button
									aria-label="choose burgundy color option"
									className="p-1 text-xs text-pink-800 transition rounded-full hover:ring-2 hover:ring-pink-800"
								>
									<FaCircle />
								</button>
								<button
									aria-label="choose green color option"
									className="p-1 text-xs text-green-800 transition rounded-full hover:ring-2 hover:ring-green-800"
								>
									<FaCircle />
								</button>
								<button
									aria-label="choose blue color option"
									className="p-1 text-xs text-blue-800 transition rounded-full hover:ring-2 hover:ring-blue-800"
								>
									<FaCircle />
								</button>
							</div>

							<div className="flex flex-row items-center space-x-4">
								<button
									aria-label="quantity subtract 1"
									className="p-2 text-gray-800 transition bg-blue-200 rounded-md hover:bg-blue-300"
								>
									<FaMinus />
								</button>
								<p className="text-xl font-medium">1</p>
								<button
									aria-label="quantity add 1"
									className="p-2 text-gray-800 transition bg-blue-200 rounded-md hover:bg-blue-300"
								>
									<FaPlus />
								</button>
							</div>
						</div>
					</div>

					<div className="flex flex-row items-center justify-between px-4 pb-4">
						<h1 className="text-2xl font-medium">$456</h1>
						<button
							aria-label="add to cart button"
							className="inline-flex items-center px-4 py-2 font-medium text-white transition bg-blue-800 rounded-md shadow-md hover:bg-blue-700"
						>
							<FaShoppingCart className="mr-2" />
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
