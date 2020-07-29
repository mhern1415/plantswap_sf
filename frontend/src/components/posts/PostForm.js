import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions'


class PostForm extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            title: '',
            price: '',
            description: '',
            image_url: '',
            contact: '',
            zip_code: '',
            date: '',
            plant_type: '',
            user_id: ''            

        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleOnSubmit(event){
        event.preventDefault();

        let request = {
            title: this.state.title,
            user_id: this.props.currentUserId,
            price: this.state.price,
            description: this.state.description,
            image_url: this.state.image_url,
            date: this.state.date,
            plant_type: this.state.plant_type,
            contact: this.props.currentUserEmail,
            zip_code: this.state.zip_code
          }      
        
        
        this.props.addPost(request, this.props.history)


    }
    
    render() {
        return (
            <div className="post-form">
                <div className="ui form">
                    <form onSubmit={(event) => this.handleOnSubmit(event)}>
                        <div className="field">
                            <label>Title</label>
                            <input
                            name="title"
                            type="text"
                            value={this.state.text}
                            onChange={(event) => this.handleOnChange(event)}
                            placeholder="Title of Post"
                            required
                            autoComplete="off"
                            />
                        </div>
                        <div className="field">
                            <label>Price</label>
                            <input
                            name="price"
                            type="text"
                            value={this.state.text}
                            onChange={(event) => this.handleOnChange(event)}
                            placeholder="Do not put $ sign"
                            required
                            autoComplete="off"
                            />
                        </div>
                        <div className="field">
                            <label>Description</label>
                            <input
                            name="description"
                            type="text"
                            value={this.state.text}
                            onChange={(event) => this.handleOnChange(event)}
                            placeholder="Describe your plant!"
                            required
                            autoComplete="off"
                            />
                        </div>
                        <div className="field">
                            <label>Image URL</label>
                            <input
                            name="image_url"
                            type="text"
                            value={this.state.text}
                            onChange={(event) => this.handleOnChange(event)}
                            placeholder="Image link of your plant"
                            required
                            autoComplete="off"
                            />
                        </div>
                        <div className="field">
                            <label>Zip Code</label>
                            <input
                            name="zip_code"
                            type="text"
                            value={this.state.text}
                            onChange={(event) => this.handleOnChange(event)}
                            placeholder="Zip code of your location"
                            required
                            autoComplete="off"
                            />
                        </div>
                        <div className="field">
                            <label>Today's Date</label>
                            <input
                            name="date"
                            type="date"
                            value={this.state.date}
                            onChange={(event) => this.handleOnChange(event)}
                            placeholder="05/25/20"
                            required
                            autoComplete="off"
                            />
                        </div>
                        <div className="field">
                <label>Plant Type</label>
                  <div>
                    <input
                      className="ui radio checkbox space"
                      type="radio"
                      name="plant_type"
                      value="Rooted Plant"
                      checked={this.state.plant_type === "Rooted Plant" ? true : false}
                      onChange={this.handleOnChange}
                      />
                    <label>Rooted Plant(s)</label>
                    <br></br><br></br>
                    <input
                      className="ui radio checkbox space"
                      type="radio"
                      name="plant_type"
                      value="Cutting(s)"
                      checked={this.state.plant_type === "Cutting(s)" ? true : false}
                      onChange={this.handleOnChange}
                      />
                    <label>Cutting(s)</label>
                    <br></br><br></br>
                    <input
                      className="ui radio checkbox space"
                      type="radio"
                      name="plant_type"
                      value="Prop(s)"
                      checked={this.state.plant_type === "Prop(s)" ? true : false}
                      onChange={this.handleOnChange}
                      />
                    <label>Prop(s)</label>
                </div>
              </div>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUserId: state.auth.userId,
        currentUserEmail: state.auth.userEmail
};
};

export default connect(mapStateToProps, {addPost})(PostForm);