import React, { Component } from 'react';
import API from "../../utils/API";

// TODO Set up divs to contain saved items and add components that allow for deleting saved items
class SavedGallery extends Component {
    state = {
        items: [],
        promiseIsResolved: false,
    };

    loadSaved() {
        
    }

   componentDidMount(){
        API.getBooks().then((res => {
            this.setState({ items: res.data})}))
            .then(this.setState({promiseIsResolved: true}));
    }

    // generateSavedItems(items){
    //     const itemsArray = [];
    //     for (let i=0; i<items.length; i++) {
    //         const item = {
    //             authors: items[i].authors,
    //             description: items[i].description,
    //             image: items[i].image,
    //             link: items[i].link,
    //             title: items[i].title[0],
    //             id: items[i]._id
    //         }

    //         itemsArray.push(item);
    //     }
    //     return itemsArray;
    // }

    render() {
        let altImage = 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Play-Books-icon.png';
        if(!this.state.promiseIsResolved){return null}
        else{
    return (
        <div className="book-list-wrapper">
            {
                
                this.state.items.map((item, index) => {
                    console.log(item);
                    let { authors, title, image, link, description, id } = item;
                    let bookTitle = item.title;
                    return (
                        <div key={index} className="col-sm-12 col-md-4 col-lg-3 book-column">
                            <div className="book-wrapper">
                                {/* <Save
                                    title={item.volumeInfo.title}
                                    authors={item.volumeInfo.authors}
                                    description={item.volumeInfo.description}
                                    image={item.volumeInfo.image}
                                    link={item.volumeInfo.link}
                                    saveBook={this.saveBook} /> */}
                                <a className="book" href={link} target="_blank">
                                    <div className="book-image-wrapper">
                                        <img src={image !== undefined ? image[0].thumbnail : altImage}
                                            alt="Book Image"
                                            className="book-image"
                                        />
                                    </div>
                                    <div className="book-title white-text">
                                        <h3>{bookTitle}</h3>
                                    </div>
                                </a>
                                <p><strong>Author: </strong>{authors}</p>
                                <p><strong>Description:</strong></p>
                                {description}

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
        }
    }
}

export default SavedGallery;
