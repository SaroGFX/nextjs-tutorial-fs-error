import Link from "next/link"
import Head from "next/head"

import Layout from "../../components/layout"

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1>First Post</h1>
            <h2><Link href='/'>Back to homepage</Link></h2> 
            <p></p>
            
        </Layout>
    )
}

export default FirstPost