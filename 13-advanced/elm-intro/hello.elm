import Html exposing (Html, div, text)

main =
  Html.beginnerProgram { view = view, model = model, update = update }

-- model
model = "Hello world"

-- update (here, the identity function)
update n =
  n

-- view
view model =
  div [] [text model]
