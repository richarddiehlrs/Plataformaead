import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;

    display: flex;

    top:0;
    right: 0;

    margin-top: 24%;
    margin-right: 14%;
    z-index: 4;

    .add-note-container{
        position: relative;

        margin-left: auto;
        margin-top: 38%;
        margin-right: 14%;

        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;

        width: 600px;
        height: 200px;

        padding: 12px 12px;

        border-radius: 4px;

        background: rgba(255,255,255,1);

        box-shadow: 0 2px 10px rgba(0,0,0,0.6);
    }

    .add-note-header{
        display: flex;
        width: 100%;
        height: 30%;

        font-size: 16px;

    }
    
    .add-note-body{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        margin-top: 12px;
        padding-bottom: 8px;

        width: 100%;

        input{
            width: 100%;
            height: 80px;
        }
    }
`;

export const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

`;
