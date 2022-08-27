import React from "react";
import styled from "styled-components/native";

const Content = styled.Image `
    width: 200px;
    height: 300px;
    resize-mode: contain;
    justify-content: center;
`;

export default (props) => {
    return (
        <Content source = {{uri: props.data.avatar}}  />
    );
}