import React, { Component, PropTypes } from 'react';
import ReactTooltip from 'react-tooltip';

import './element.scss';

export default class Element extends Component {

    render() {
        const { id, title, votes, tags, onVoteClick } = this.props;
        const idS = id.toString();
        return (
            <span className="element">
                <button className="vote-btn hide-on-s-and-lower" onClick={onVoteClick} data-tip data-for={idS}>
                    <i className="material-icons icon">thumb_up</i>
                </button>
                <ReactTooltip id={idS} effect="solid">
                    <span>{votes} upvotes</span>
                </ReactTooltip>
                <div className="content-container">
                    <div className="title-container">
                        <h3 className="title">{title}</h3>
                        <span className="vote-txt hide-on-m-and-greater">
                            | {votes} <i className="material-icons icon">thumb_up</i>
                        </span>
                    </div>
                    <div className="element-tags-container">
                        {tags.map((tag, index) =>
                            <span className="element-tags" key={index}>
                                {tag}{' '}
                            </span>
                        )}
                    </div>
                </div>
            </span>
        );
    }

}

Element.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};