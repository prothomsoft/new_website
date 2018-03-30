import Link from "next/link";
import React from "react";

export default class MyLink extends React.Component {
    render() {
        return (
            <a onClick={this.handleClick}>
                {" "}
                {this.props.text}
                <style jsx>{`
                    a {
                        border: 1px solid #101010;
                        background-color: #1a1a1a;
                        display: block;
                        cursor: pointer;
                        padding: 15px;
                        color: #fff;
                    }
                `}</style>
            </a>
        );
    }

    handleClick = event => {
        if (this.props.onClick) {
            this.props.onClick(event);
        }

        if (this.props.onCustomClick) {
            this.props.onCustomClick(event);
        }
    };
}
