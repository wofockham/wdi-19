import Html exposing (Html, Attribute, div, input, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)
import String

main =
  Html.beginnerProgram { model = model, view = view, update = update }

-- MODEL
type alias Model =
  { content : String
  }

model : Model -- type annotation
model =
  { content = "" }

-- UPDATE
type Msg = Change String

update msg model =
  case msg of
    Change newContent ->
      { model | content = newContent }

-- VIEW
view model =
  div []
    [
      input [placeholder "Text to reverse", onInput Change] [],
      div [] [ text ( String.reverse model.content ) ]
    ]
