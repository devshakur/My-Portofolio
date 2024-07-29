<div className="bg-[#2F2F2F] w-[100vw] h-[100vh] mt-[-1rem] overflow-y-scroll overflow-x-hidden p-[100px]">
  <div className="flex justify-between flex-row border-b border-dashed border-black">
    <Typography
      variant="h5"
      sx={{
        fontWeight: "bold",
        "@media (min-width: 768px)": {
          fontSize: "3vh",
        },
      }}
      className="text-[#00BFFF]"
    >
      MY PortFolio.
    </Typography>
    <span>
      <ContactMailOutlinedIcon
        fontSize="large"
        className="text-[#00BFFF]"
        sx={{
          "@media (min-width: 768px)": {
            fontSize: "4vh",
          },
        }}
      />
    </span>
  </div>
  <div className="w-[90vw]">
    <Stack spacing={2} direction="row" className="flex justify-center mt-6">
      <Button variant="contained">All</Button>
      <Button variant="contained" className="absolute top-7">
        React.js
      </Button>
      <Button variant="contained">Next.js</Button>
    </Stack>
  </div>
  <div className="mt-9 bg-gray-700 ml-[-1rem] w-[90vw] h-[50vh] flex justify-center items-center rounded-[30px]">
    <img src={mock1} className="w-[90vw] h-[46vh] " />
  </div>
  <div className="mt-9 bg-green-300 ml-[-1rem] w-[90vw] h-[50vh] flex justify-center items-center rounded-[30px]">
    <img src={profileMock} className="w-[80vw] h-[46vh] " />
  </div>
</div>;
