import React from "react";
import styled from "styled-components/native";

const Indicator = styled.ActivityIndicator `

`;
const ContentIndicator = styled.View `
`;



export default () => {
    return (
        <ContentIndicator>
            <Indicator
                size="large"
                color = "white"
            />
        </ContentIndicator>
    );
}