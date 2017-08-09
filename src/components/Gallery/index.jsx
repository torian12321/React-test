var
React       = require('react'),
PropTypes   = require('prop-types'),
GalleryItem = require('./GalleryItem.jsx');

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total    : this.props.images.length,
            autoplay : this.props.autoplay,
            actualImg: 1
        };
    }
    componentDidMount() {
        if(this.props.autoplay){
            this.interval = setInterval(() => this.showNext(), this.props.autoplayTime);
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    showPrev(){
        if(this.state.actualImg > 1){
            this.showImg(this.state.actualImg - 1);
        }else if(this.props.loop){
            this.showImg(this.props.images.length);
        }
    }
    showNext(){
        if(this.state.actualImg < (this.props.images.length)){
            this.showImg(this.state.actualImg + 1);
        }else if(this.props.loop){
            this.showImg(1);
        }
    }
    showImg(index){
        this.setState({
            actualImg: index
        });
    }
    render() {
        return (
            <div className='gallery-wrapp'>
                <div className='gallery'>
                    {this.props.images.map((img, index) =>
                        <GalleryItem
                            style = { (this.state.actualImg === index+1) ? 'active' : ''}
                            key   = { index }
                            { ...img }
                        />
                    )}
                    <div className='arrow arrow-prev' onClick={ this.showPrev.bind(this) } />
                    <div className='arrow arrow-next' onClick={ this.showNext.bind(this) } />
                </div>
            </div>
        );
    }
}

Gallery.propTypes = {
    loop        : PropTypes.bool,
    autoplay    : PropTypes.bool,
    autoplayTime: PropTypes.number,
    minimap     : PropTypes.bool
};
Gallery.defaultProps = {
    loop        : true,
    autoplay    : true,
    autoplayTime: 5000,
    minimap     : true
};

module.exports = Gallery;
