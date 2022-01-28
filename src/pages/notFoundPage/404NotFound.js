import './404NotFound.css'
function NotFound() {
    return (  
            <div className="container p-5 text-white">
                <h1>:(</h1><br/>
                    <h2>A <span>404</span> error occured, Page not found, check the URL and try again.</h2><br/><br/>
                    <h3><a>Return to home</a>&nbsp;|&nbsp;<a href="javascript:history.back()">Go Back</a></h3>
            </div>

        );
}
export default NotFound;