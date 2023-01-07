import { useRouter } from 'next/router';
import React, { useMemo } from 'react'
import Link from 'next/link';
import classNames from 'classnames';
import Head from 'next/head';

const menuList = [{ id: 1, name: "Home", label: "Dashboard", link: "/" }
    , { id: 2, name: "PurchaseOrder", label: "PO", link: "/purchase-order" }
    , { id: 3, name: "Outlet", label: "Outlet", link: "/outlet" }
    , { id: 4, name: "Contract", label: "Kontrak", link: "/contract" }
    , { id: 5, name: "Item", label: "Item", link: "/item" }
]

const Navbar = () => {

    const router = useRouter()

    const activeMenu = useMemo(
        () => menuList.find(menu => menu.link === router.pathname),
        [router.pathname]
    )

    const itemClasses = (menu) => {
        return classNames("cursor-pointer tracking-wide text-gray-700 font-semibold pl-1 pr-3 py-2 w-full hover:text-green-500 transition linear duration-300", {
            ["text-green-700"]: activeMenu.id === menu.id,
        })
    }

    return (
        <>
            <Head>
                <title>M-GIK | {activeMenu != null ? activeMenu.label : "Gerbang Indah Kencana"} </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="shadow-xl h-screen z-10">
                <div className="h-full">
                    <div className="flex items-center w-fit px-5 h-full">
                        <div className="flex flex-col items items-center mx-4 h-full">
                            <div className="flex justify-center py-4 items-center flex-shrink-0">
                                <h1 className="font-black text-2xl text-green-600 cursor-pointer">
                                    M-GIK
                                </h1>
                            </div>
                            <div className="flex flex-col">
                                <div className=" flex flex-col items-baseline w-32">
                                    {menuList.map(({ ...menu }) => {
                                        const classes = itemClasses(menu)
                                        return (
                                            <Link href={menu.link}
                                                className={classes}>
                                                {menu.label}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar