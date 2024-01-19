import { useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default function ExampleTwo () {

    /**
     * the [] makes sure tge useeffect only used once
     * code o pages will run two times
     * once to render what we wamt amd ampther is to 
     * render stict mode to find any common bugs
     */
useEffect(() => {
    console.log("RUN")
}, [])

    return(
        <>
        <Header/>
        <main>
            <h1>Example 2</h1>
        </main>
        <Footer/>
        </>

    )
}