const HomePage = ({setPageName}) => {
    return(
        <div id="homepage" className="panel">
            <h2>Access Assessment</h2>
            <h3>Click below to start the assessment.</h3>
            <button className="artifact-button" onClick={() => setPageName("interview")}>Start</button>
        </div>
    );
}

export default HomePage;