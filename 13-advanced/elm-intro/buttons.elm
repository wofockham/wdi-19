import Html exposing (Html, button, div, text, hr, node)
import Html.Events exposing (onClick)

main = Html.beginnerProgram { model = model, view = view, update = update }

-- MODEL
model = 0

-- UPDATE
type Msg = Increment | Decrement | Reset

update msg model =
  case msg of
    Increment ->
      model + 1
    Decrement ->
      model - 1
    Reset ->
      0

customCSS = """
body {
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
"""

style css = node "style" [] [text css]

-- VIEW
view model =
  div []
    [ style customCSS,
      button [onClick Decrement] [text "-"],
      div [] [text (toString model)],
      button [onClick Increment] [text "+"],
      hr [] [],
      button [onClick Reset] [text "Reset"]
    ]
