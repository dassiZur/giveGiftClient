import React from "react";
//import React, { useEffect,useState } from "react";
import "./photo.scss";
import axios from "axios"

/* TEST DATA BEGINS */
// const SAMPLE_IMAGES = Array(0).fill(0).map((_, i) => ({
//     file: {},
//     thumbnail: `https://picsum.photos/500/400/?random${i}`
//   }));
  /* TEST DATA ENDS */
  
  // Component classes
 class ImageUploaderThumbnails extends React.Component {
    render() {
      let Input = this.props.input || null;
      return (
        <div className="image-thumbnails">
          <div className="image-thumbnail image-upload-button-container">
            <Input />
            <span>+</span>
          </div>
       
          {this.props.thumbnails.map((thumbnail, index) => (
            <div
              className={"image-thumbnail" + (index === this.props.current ? " image-thumbnail-selected" : "")}
              style={{ "background-image": `url(${thumbnail})` }}
              onClick={e => {
                this.props.onSelect && this.props.onSelect(index);
              }}
            />
          ))}
        </div>
      );
    }
  }
  
 export default class ImageUploader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // files: [...SAMPLE_IMAGES],
        files: [],
        previewIndex: 0,
        showDropArea: false
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.showDropArea = this.showDropArea.bind(this);
      this.hideDropArea = this.hideDropArea.bind(this);
      this.showNextImage = this.showNextImage.bind(this);
      this.showPreviousImage = this.showPreviousImage.bind(this);
      this.removeCurrentImage = this.removeCurrentImage.bind(this);
    }
    readFileData(file) {
      const promise = new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = () => {
          reject("Something went wrong when reading the file");
        };
        reader.readAsDataURL(file);
      });
      return promise;
    }
    selectImageForPreview(previewIndex, relative) {
      if (relative) {
        this.setState((prevState) => {
          let newState = Object.assign({}, prevState)
          let imageCount = this.state.files.length
          newState.previewIndex = (prevState.previewIndex + previewIndex + imageCount) % (imageCount)
          return newState
        })
      } else {
        this.setState({ previewIndex });
      }
    }
    showNextImage () {
      this.selectImageForPreview(1, true)
    }
    showPreviousImage () {
      this.selectImageForPreview(-1, true)
    }
    removeCurrentImage (e) {
      e && e.preventDefault()
      let indexToRemove = this.state.previewIndex;
      let file =this.state.files[indexToRemove];

      this.setState((prevState) => {
        let nextState = Object.assign({}, prevState)
        nextState.files = prevState.files.filter((_, index) => (
          index !== indexToRemove
        ))
        nextState.previewIndex = Math.max(Math.min(nextState.files.length - 1, prevState.previewIndex), 0)
        return nextState
      })
    }
    handleInputChange(e) {
      e && e.stopPropagation()
      let files = e.target.files;
      var file=files[0];

      let fileReadProcesses2 = Array.prototype.map.call(files, file =>
        {
          const formData=new FormData();
          formData.append('file',file)
        
          axios.post("http://localhost:5000/upload",formData,{}).then(res=>{
            console.log(res.data.path);
            if(localStorage.getItem("newBuss")){
              var bus=JSON.parse( localStorage.getItem("newBuss"));
            bus.photoAdvertising.push({imageUrl:res.data.path,countShow:0});
            localStorage.setItem("newBuss",JSON.stringify(bus));
            }
            
            localStorage.setItem("image",res.data.path);
           // debugger;
           // res.userCreated.profileImg
          })
        }
      );
      let fileReadProcesses = Array.prototype.map.call(files, file =>
        this.readFileData(file)
      );
      Promise.all(fileReadProcesses).then(thumbnails => {
        let filesData = thumbnails.map((thumbnail, index) => ({
          file: files[index],
          thumbnail
        }));
        this.setState(prevState => {
          let newState = Object.assign({}, prevState);
          newState.files = prevState.files.concat(filesData);
          return newState;
        });
      });
    }
    showDropArea (e) {
      e && e.preventDefault()
      this.setState({ showDropArea: true })
    }
    hideDropArea (e) {
      e && e.preventDefault()
      this.setState({ showDropArea: false })    
    }
    render() {
     //console.warn(this.state);
      let Input = () => (
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          multiple={this.props.multiple || false}
          onChange={this.handleInputChange}
          className="image-upload-button"
        />
      );
      let {previewIndex} = this.state
      let previewImage = this.state.files.length
        ? this.state.files[previewIndex].thumbnail
        : "";
      return (
        <div className="image-uploader">
          <div className="image-uploader-container">
            {(!this.state.files.length || this.state.showDropArea) ? (
              <div className="image-upload-button-container image-upload-button-view-full">
                <Input />

            לחץ כאן כדי להתחיל לעלות תמונות  
              </div>
            ) : [
              <div
                key="1"
                className="image-upload-preview"
                style={{ "background-image": `url(${previewImage})` }}
              >
                {this.props.multiple ? (
                  <div className="image-preview-index">
                    {previewIndex + 1} &#x2f;  {this.state.files.length}
                  </div>
                ) : null}
                {this.props.multiple && this.state.files.length && (
                  <div className="image-navigation-buttons">
                    <button className="image-navigation-button"
                      onClick={this.showPreviousImage}
                    >
                      
                      &#10092;
                    </button>
                    <button className="image-navigation-button"
                      onClick={this.showNextImage}
                    >
                      &#10093;
                    </button>
                  </div>
                  )}
              </div>,
              <div className="image-action-buttons" key="2">
                {/* <button className="image-action-button">View</button> */}
                <button className="image-action-button" onClick={this.removeCurrentImage}>מחק</button>
              </div>
            ]}
          </div>
          {/* <div className="image-thumbnail image-upload-button-container">
            <Input onClick={this.removeCurrentImage} />            
            <span>Delete</span>
          </div> */}
          {this.props.multiple && this.state.files.length ? (
            <ImageUploaderThumbnails
              thumbnails={this.state.files.map(image => image.thumbnail)}
              current={previewIndex}
              onSelect={index => {
                this.selectImageForPreview(index);
              }}
              input={Input}
            />       
          ) : null}
        </div>
      );
    }
  }
  