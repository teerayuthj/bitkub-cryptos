import styled from "styled-components";

export const Layout = styled.div`
  .container-table {
    margin-top: 5rem;
    overflow-x: auto;
    padding-left: 10px;
    width: 100%;
    padding: 20px;
    border-radius: 1rem;
    -webkit-box-shadow: 0 0 0 0 #e7e6e4, 0 0.8rem 1.5rem 0 rgb(42 40 37 / 20%);
    box-shadow: 0 0 0 0 #e7e6e4, 0 0.8rem 1.5rem 0 rgb(42 40 37 / 20%);
  }

  @media (max-width: 767px) {
    .container-table {
      width: auto;
      padding: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
  .Change-Fix {
    box-sizing: border-box;
  }
`;
