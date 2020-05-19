import React ,{Component} from 'react';

export default class FilesUploadComponent extends Component  {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        
                        <div className="form-group">
                            <input type="file" multiple/>
                        </div>
                        <div className="form-group">
                           
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}