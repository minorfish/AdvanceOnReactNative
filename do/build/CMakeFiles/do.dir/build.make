# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.13

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /Applications/CMake.app/Contents/bin/cmake

# The command to remove a file.
RM = /Applications/CMake.app/Contents/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/do

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/do/build

# Include any dependencies generated for this target.
include CMakeFiles/do.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/do.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/do.dir/flags.make

CMakeFiles/do.dir/HelloJNI.cc.o: CMakeFiles/do.dir/flags.make
CMakeFiles/do.dir/HelloJNI.cc.o: ../HelloJNI.cc
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/do/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/do.dir/HelloJNI.cc.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/do.dir/HelloJNI.cc.o -c /Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/do/HelloJNI.cc

CMakeFiles/do.dir/HelloJNI.cc.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/do.dir/HelloJNI.cc.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/do/HelloJNI.cc > CMakeFiles/do.dir/HelloJNI.cc.i

CMakeFiles/do.dir/HelloJNI.cc.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/do.dir/HelloJNI.cc.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/do/HelloJNI.cc -o CMakeFiles/do.dir/HelloJNI.cc.s

# Object files for target do
do_OBJECTS = \
"CMakeFiles/do.dir/HelloJNI.cc.o"

# External object files for target do
do_EXTERNAL_OBJECTS =

do: CMakeFiles/do.dir/HelloJNI.cc.o
do: CMakeFiles/do.dir/build.make
do: CMakeFiles/do.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/do/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable do"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/do.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/do.dir/build: do

.PHONY : CMakeFiles/do.dir/build

CMakeFiles/do.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/do.dir/cmake_clean.cmake
.PHONY : CMakeFiles/do.dir/clean

CMakeFiles/do.dir/depend:
	cd /Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/do/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/do /Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/do /Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/do/build /Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/do/build /Users/shengshuqiang/ideal/HelloJSCore/AdvanceOnReactNative/do/build/CMakeFiles/do.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/do.dir/depend

