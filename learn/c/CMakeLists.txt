cmake_minimum_required(VERSION 2.8)
project (learn)

set(CMAKE_CXX_STANDARD 11)
# set(CMAKE_INSTALL_RPATH_USE_LINK_PATH TRUE)
set(PROJECT_LINK_LIBS libv8.dylib libv8_libplatform.dylib)

link_directories(${CMAKE_SOURCE_DIR}/libs)
include_directories(include)

add_executable(learn shell.cc)
# add_executable(learn process.cc)
# add_executable(learn basic-knowledge.cpp)
# add_executable(learn hello-world.cc)


# message(STATUS ${CMAKE_BINARY_DIR})
target_link_libraries(learn libv8.dylib ${PROJECT_LINK_LIBS})
