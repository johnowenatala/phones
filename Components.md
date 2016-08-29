# Components Map


```
    Root
    |
    +-App
      |
      +-(some content)
      |
      +-*Search*
      | |
      | +-(self) 
      |
      +-SorterList
      | |
      | +-*SorterLink*
      | | |
      | | +-Link
      | |
      | +-*SorterLink*
      |   |
      |   +-Link
      |
      +-*VisiblePhoneList*
        |
        +-PhoneList
          |
          +-Phone
          | |
          | +-(some content)
          | |
          | +-Stars
          | | |
          | | +-*StarLink*
          | | | |
          | | | +-Link
          | | |
          | | ...4 more StarLink components
          | |
          | +-*ImageModal*
          | | |
          | | +-Link
          | | |
          | | +-(? Modal ?)
          | |
          | +-*InPlaceTextArea*
          |   |
          |   +-(self)
          |
          ...some more Phone components
          
```

(Please note that (? Modal ?) indicates unknown content, maybe a Modal component)

### Notation:
```
  ParentComponent     # this is the parent component, a react one
  |
  +-FirstChild        # this is the first child - also a react component
  | |
  | +-FirstGrandChild # this react component is the child of FirstChild
  |
  +-*SecondChild*     # this react component is a redux container
  | |
  | +-SecondGrandChild # this component is wrapped by SecondChild container
  |
  +-*ThirdChild*      # this is also a redux container
  | |
  | +-(self)          # this (self) indicates that this container is a component wrapped by it self
  |
  +-ForthChild        # another regular react component
  | |
  | +-(some content)  # with some HTML content
  | |
  | +-Another         # and another regular react component as a child
  | |
  | ...some more Another components # This indicates that ForthChild can have 0 or more Another components as child
  |
  +-OtherChild        # another regular react component
    |
    +-Another         # 
    |
    ...3 more Another components # This indicates that OtherChild has exactly 4 Another components as its children
  
  
  
```
