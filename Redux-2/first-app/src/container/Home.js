import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {latestNews,articleNews,galleryNews} from '../actions';
import { bindActionCreators } from 'redux';


import LatestDisplay from '../component/Home/LatestDisplay';
import ArticleDisplay from '../component/Home/ArticleDisplay';
import GalleryDisplay from  '../component/Home/GalleryDisplay';



class Home extends Component{
  
    componentDidMount(){
      this.props.latestNews()
      this.props.articleNews()
      this.props.galleryNews()

   }

    render(){
        return(
            <Fragment>
                <LatestDisplay ldata={this.props.datalist.latestdata}/>
                <ArticleDisplay adata={this.props.datalist.articledata}/>
                <GalleryDisplay gdata={this.props.gallerylist.gallerydata}/>
             
            </Fragment>
        )
    }

}


function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.articles,
        gallerylist:state.gallery
        
    }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({latestNews,articleNews,galleryNews},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);