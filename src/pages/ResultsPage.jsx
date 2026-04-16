const ResultsPage = ({results, setPageName}) => {
    return(
        <div id="results-page">
            <h2>Thank you for completing the questionnaire</h2>
            <h3>These are your group assignments</h3>
            {
                results
                ?  <>
                    {
                        results.length === 0
                        ? <div id="no-group-result" className="panel">
                            <p>No roles have been assigned, please restart the assessment and ensure that you answer the questions fully.</p>
                            <button className="artifact-button" onClick={() => {setPageName("home")}} >Restart</button>
                        </div>
                        : results.map((result,idx) => (
                            <div className="group-result panel" key={idx}>
                                <div className="text-group">
                                    <p><strong>Role:</strong></p>
                                    <p>{result.role_name}</p>
                                </div>
                                <div className="text-group">
                                    <p><strong>Justification:</strong></p>
                                    <p>{result.justification}</p>
                                </div>  
                            </div>
                        ))
                    }
                </>
                : null
            }
        </div>
    );
}

export default ResultsPage;