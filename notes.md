# operations done till now:

1.Routing ✅
2.validations using react hook form ✅
3.Modals in react✅
4.Responsive layouts✅

block - display karo UI ko(visible)
hidden - to hide the UI(hidden/invisible)


 {/* <RolesModal/>  to be rendered only when the state gets true value*/}
          {showRolesModal && (
            <RolesModal onClose={() => setShowRolesModal(false)} />
          )}

              {showUsersModal && (
        <UsersModal onClose={() => setShowUsersModal(false)} />
      )}

  const [showUsersModal, setShowUsersModal] = useState(false); //initially false
