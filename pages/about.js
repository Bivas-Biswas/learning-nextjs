import Footer from "../components/Footer";

function About() {
    return <h1 className={'content'}>About</h1>
}

export default About


About.getLayout = function PageLayout(page){
    return (
        <>
            {page}
            <Footer/>
        </>
    )
}