# React + Vite

      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

//   <ListItem key={list} disablePadding>
//   <ListItemButton>
//     <ListItemText primary={list} />
//   </ListItemButton>
// </ListItem>

         {/* Error message component */}
            {errors.firstName && errors.firstName.type === "required" && (
              <span className="text-red-500">This field is required</span>
            )}
            {errors.firstName && <div className="text-red-500">{errors.firstName.message}</div>}
            {errors.firstName && errors.firstName.type === "maxLength" && (
              <span className="text-red-500">Max length is 20</span>
            )}
            {errors.firstName && errors.firstName.type === "minLength" && (
              <span className="text-red-500">Min length is 3</span>
            )}
            {/* {errors.firstName && errors.firstName.type === "pattern" && (
              <span className="text-red-500">Only alphabets are allowed</span>
            )} */}

# image framer motion 
               <motion.img
              initial={{ y: "100%" }} // initial position
              animate={{ y: 0 }} // final position
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
              }}
              className="absolute lg:-right-85 lg:top-72"
              src={modernFormBg}
              alt="Modern Form Background"
            />