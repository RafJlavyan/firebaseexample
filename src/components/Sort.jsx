import { Button, ButtonGroup } from "@mui/material";


const Sort = ({fn}) => {

  return (
    <ButtonGroup>
        <Button onClick={() => fn("asc")}>price(asc)</Button>
        <Button onClick={() => fn("desc")}>price(desc)</Button>
    </ButtonGroup>
  )
}

export default Sort