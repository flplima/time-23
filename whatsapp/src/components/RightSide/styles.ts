import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  background-image: url("https://i.pinimg.com/originals/cf/14/0d/cf140dac517f37fc801b6b91aaf76fea.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

  min-height: 100%;
  max-height: 100%;


  main {
    overflow: auto;
  }

  padding-top: 1em;
`