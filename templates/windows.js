/* eslint max-len: 0 */
const uuid = require('uuid').v1().toUpperCase();

module.exports = platform => [{
  name: ({ name }) => `${platform}/${name}.sln`,
  content: ({ name }) =>
`Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio 14
VisualStudioVersion = 14.0.25123.0
MinimumVisualStudioVersion = 10.0.40219.1
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "${name}", "${name}\\${name}.csproj", "{${uuid}}"
EndProject
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "ReactNative", "..\\node_modules\\react-native-windows\\ReactWindows\\ReactNative\\ReactNative.csproj", "{C7673AD5-E3AA-468C-A5FD-FA38154E205C}"
EndProject
Project("{D954291E-2A0B-460D-934E-DC6B0785DB48}") = "ReactNative.Shared", "..\\node_modules\\react-native-windows\\ReactWindows\\ReactNative.Shared\\ReactNative.Shared.shproj", "{EEA8B852-4D07-48E1-8294-A21AB5909FE5}"
EndProject
Project("{8BC9CEB8-8B4A-11D0-8D11-00A0C91BC942}") = "ChakraBridge", "..\\node_modules\\react-native-windows\\ReactWindows\\ChakraBridge\\ChakraBridge.vcxproj", "{4B72C796-16D5-4E3A-81C0-3E36F531E578}"
EndProject
Global
	GlobalSection(SharedMSBuildProjectFiles) = preSolution
		..\\node_modules\\react-native-windows\\ReactWindows\\ReactNative.Shared\\ReactNative.Shared.projitems*{c7673ad5-e3aa-468c-a5fd-fa38154e205c}*SharedItemsImports = 4
		..\\node_modules\\react-native-windows\\ReactWindows\\ReactNative.Shared\\ReactNative.Shared.projitems*{eea8b852-4d07-48e1-8294-a21ab5909fe5}*SharedItemsImports = 13
	EndGlobalSection
	GlobalSection(SolutionConfigurationPlatforms) = preSolution
		Debug|ARM = Debug|ARM
		Debug|x64 = Debug|x64
		Debug|x86 = Debug|x86
		Development|ARM = Development|ARM
		Development|x64 = Development|x64
		Development|x86 = Development|x86
		Release|ARM = Release|ARM
		Release|x64 = Release|x64
		Release|x86 = Release|x86
	EndGlobalSection
	GlobalSection(ProjectConfigurationPlatforms) = postSolution
		{${uuid}}.Debug|ARM.ActiveCfg = Debug|ARM
		{${uuid}}.Debug|ARM.Build.0 = Debug|ARM
		{${uuid}}.Debug|x64.ActiveCfg = Debug|x64
		{${uuid}}.Debug|x64.Build.0 = Debug|x64
		{${uuid}}.Debug|x86.ActiveCfg = Debug|x86
		{${uuid}}.Debug|x86.Build.0 = Debug|x86
		{${uuid}}.Development|ARM.ActiveCfg = Development|ARM
		{${uuid}}.Development|ARM.Build.0 = Development|ARM
		{${uuid}}.Development|x64.ActiveCfg = Development|x64
		{${uuid}}.Development|x64.Build.0 = Development|x64
		{${uuid}}.Development|x86.ActiveCfg = Development|x86
		{${uuid}}.Development|x86.Build.0 = Development|x86
		{${uuid}}.Release|ARM.ActiveCfg = Release|ARM
		{${uuid}}.Release|ARM.Build.0 = Release|ARM
		{${uuid}}.Release|x64.ActiveCfg = Release|x64
		{${uuid}}.Release|x64.Build.0 = Release|x64
		{${uuid}}.Release|x86.ActiveCfg = Release|x86
		{${uuid}}.Release|x86.Build.0 = Release|x86
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|ARM.ActiveCfg = Debug|ARM
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|ARM.Build.0 = Debug|ARM
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|x64.ActiveCfg = Debug|x64
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|x64.Build.0 = Debug|x64
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|x86.ActiveCfg = Debug|x86
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|x86.Build.0 = Debug|x86
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|ARM.ActiveCfg = Debug|ARM
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|ARM.Build.0 = Debug|ARM
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|x64.ActiveCfg = Debug|x64
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|x64.Build.0 = Debug|x64
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|x86.ActiveCfg = Debug|x86
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|x86.Build.0 = Debug|x86
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|ARM.ActiveCfg = Release|ARM
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|ARM.Build.0 = Release|ARM
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|x64.ActiveCfg = Release|x64
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|x64.Build.0 = Release|x64
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|x86.ActiveCfg = Release|x86
    {C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|x86.Build.0 = Release|x86
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Debug|ARM.ActiveCfg = Debug|ARM
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Debug|ARM.Build.0 = Debug|ARM
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Debug|x64.ActiveCfg = Debug|x64
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Debug|x64.Build.0 = Debug|x64
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Debug|x86.ActiveCfg = Debug|Win32
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Debug|x86.Build.0 = Debug|Win32
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Development|ARM.ActiveCfg = Debug|ARM
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Development|ARM.Build.0 = Debug|ARM
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Development|x64.ActiveCfg = Debug|x64
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Development|x64.Build.0 = Debug|x64
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Development|x86.ActiveCfg = Debug|Win32
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Development|x86.Build.0 = Debug|Win32
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Release|ARM.ActiveCfg = Release|ARM
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Release|ARM.Build.0 = Release|ARM
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Release|x64.ActiveCfg = Release|x64
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Release|x64.Build.0 = Release|x64
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Release|x86.ActiveCfg = Release|Win32
		{4B72C796-16D5-4E3A-81C0-3E36F531E578}.Release|x86.Build.0 = Release|Win32    
	EndGlobalSection
	GlobalSection(SolutionProperties) = preSolution
		HideSolutionNode = FALSE
	EndGlobalSection
EndGlobal
  `,
}, {
  name: () => `${platform}/.gitignore`,
  content: () =>
`*AppPackages*
*BundleArtifacts*
*ReactAssets*

#OS junk files
[Tt]humbs.db
*.DS_Store

#Visual Studio files
*.[Oo]bj
*.user
*.aps
*.pch
*.vspscc
*.vssscc
*_i.c
*_p.c
*.ncb
*.suo
*.tlb
*.tlh
*.bak
*.[Cc]ache
*.ilk
*.log
*.lib
*.sbr
*.sdf
*.opensdf
*.opendb
*.unsuccessfulbuild
ipch/
[Oo]bj/
[Bb]in
[Dd]ebug*/
[Rr]elease*/
Ankh.NoLoad

#MonoDevelop
*.pidb
*.userprefs

#Tooling
_ReSharper*/
*.resharper
[Tt]est[Rr]esult*
*.sass-cache

#Project files
[Bb]uild/

#Subversion files
.svn

# Office Temp Files
~$*

# vim Temp Files
*~

#NuGet
packages/
*.nupkg

#ncrunch
*ncrunch*
*crunch*.local.xml

# visual studio database projects
*.dbmdl

#Test files
*.testsettings

#Other files
*.DotSettings
.vs/
*project.lock.json
`,
}, {
  name: ({ name }) => `${platform}/.npmignore`,
  content: () =>
`
# Make sure we don't publish build artifacts to NPM
ARM/
Debug/
x64/
x86/
bin/
obj/
.vs/
`
}, {
  name: ({ name }) => `${platform}/${name}/project.json`,
  content: () =>
`{
  "dependencies": {
    "Microsoft.NETCore.UniversalWindowsPlatform": "5.2.2"
  },
  "frameworks": {
    "uap10.0": {}
  },
  "runtimes": {
    "win10-arm": {},
    "win10-arm-aot": {},
    "win10-x86": {},
    "win10-x86-aot": {},
    "win10-x64": {},
    "win10-x64-aot": {}
  }
}
`,
}, {
  name: ({ name }) => `${platform}/${name}/${name}.csproj`,
  content: ({ name, namespace }) =>
`<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="14.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <Import Project="$(MSBuildExtensionsPath)\\$(MSBuildToolsVersion)\\Microsoft.Common.props" Condition="Exists('$(MSBuildExtensionsPath)\\$(MSBuildToolsVersion)\\Microsoft.Common.props')" />
  <PropertyGroup>
    <Configuration Condition=" '$(Configuration)' == '' ">Debug</Configuration>
    <Platform Condition=" '$(Platform)' == '' ">x86</Platform>
    <ProjectGuid>{${uuid}}</ProjectGuid>
    <OutputType>Library</OutputType>
    <AppDesignerFolder>Properties</AppDesignerFolder>
    <RootNamespace>${namespace}</RootNamespace>
    <AssemblyName>${namespace}</AssemblyName>
    <DefaultLanguage>en-US</DefaultLanguage>
    <TargetPlatformIdentifier>UAP</TargetPlatformIdentifier>
    <TargetPlatformVersion>10.0.10586.0</TargetPlatformVersion>
    <TargetPlatformMinVersion>10.0.10240.0</TargetPlatformMinVersion>
    <MinimumVisualStudioVersion>14</MinimumVisualStudioVersion>
    <FileAlignment>512</FileAlignment>
    <ProjectTypeGuids>{A5A43C5B-DE2A-4C0C-9213-0A381AF9435A};{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}</ProjectTypeGuids>
    <ReactWindowsRoot>..\\..\\node_modules</ReactWindowsRoot>
  </PropertyGroup>
  <PropertyGroup Condition=" '$(Configuration)' != 'Development'">
    <ReactWindowsRoot>..\\..</ReactWindowsRoot>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Debug|x86'">
    <PlatformTarget>x86</PlatformTarget>
    <DebugSymbols>true</DebugSymbols>
    <OutputPath>bin\\x86\\Debug\\</OutputPath>
    <DefineConstants>DEBUG;TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <NoWarn>;2008</NoWarn>
    <DebugType>full</DebugType>
    <PlatformTarget>x86</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Release|x86'">
    <PlatformTarget>x86</PlatformTarget>
    <OutputPath>bin\\x86\\Release\\</OutputPath>
    <DefineConstants>TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <Optimize>true</Optimize>
    <NoWarn>;2008</NoWarn>
    <DebugType>pdbonly</DebugType>
    <PlatformTarget>x86</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Debug|ARM'">
    <PlatformTarget>ARM</PlatformTarget>
    <DebugSymbols>true</DebugSymbols>
    <OutputPath>bin\\ARM\\Debug\\</OutputPath>
    <DefineConstants>DEBUG;TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <NoWarn>;2008</NoWarn>
    <DebugType>full</DebugType>
    <PlatformTarget>ARM</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Release|ARM'">
    <PlatformTarget>ARM</PlatformTarget>
    <OutputPath>bin\\ARM\\Release\\</OutputPath>
    <DefineConstants>TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <Optimize>true</Optimize>
    <NoWarn>;2008</NoWarn>
    <DebugType>pdbonly</DebugType>
    <PlatformTarget>ARM</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Debug|x64'">
    <PlatformTarget>x64</PlatformTarget>
    <DebugSymbols>true</DebugSymbols>
    <OutputPath>bin\\x64\\Debug\\</OutputPath>
    <DefineConstants>DEBUG;TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <NoWarn>;2008</NoWarn>
    <DebugType>full</DebugType>
    <PlatformTarget>x64</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Release|x64'">
    <PlatformTarget>x64</PlatformTarget>
    <OutputPath>bin\\x64\\Release\\</OutputPath>
    <DefineConstants>TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <Optimize>true</Optimize>
    <NoWarn>;2008</NoWarn>
    <DebugType>pdbonly</DebugType>
    <PlatformTarget>x64</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Development|x86'">
    <DebugSymbols>true</DebugSymbols>
    <OutputPath>bin\\x86\\Development\\</OutputPath>
    <DefineConstants>DEBUG;TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <NoWarn>;2008</NoWarn>
    <NoStdLib>true</NoStdLib>
    <DebugType>full</DebugType>
    <PlatformTarget>x86</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
    <CodeAnalysisRuleSet>MinimumRecommendedRules.ruleset</CodeAnalysisRuleSet>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Development|ARM'">
    <DebugSymbols>true</DebugSymbols>
    <OutputPath>bin\\ARM\\Development\\</OutputPath>
    <DefineConstants>DEBUG;TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <NoWarn>;2008</NoWarn>
    <NoStdLib>true</NoStdLib>
    <DebugType>full</DebugType>
    <PlatformTarget>ARM</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
    <CodeAnalysisRuleSet>MinimumRecommendedRules.ruleset</CodeAnalysisRuleSet>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Development|x64'">
    <DebugSymbols>true</DebugSymbols>
    <OutputPath>bin\\x64\\Development\\</OutputPath>
    <DefineConstants>DEBUG;TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <NoWarn>;2008</NoWarn>
    <NoStdLib>true</NoStdLib>
    <DebugType>full</DebugType>
    <PlatformTarget>x64</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
    <CodeAnalysisRuleSet>MinimumRecommendedRules.ruleset</CodeAnalysisRuleSet>
  </PropertyGroup>
  <ItemGroup>
    <!-- A reference to the entire .Net Framework and Windows SDK are automatically included -->
    <None Include="project.json" />
  </ItemGroup>
  <ItemGroup>
    <Compile Include="Properties\\AssemblyInfo.cs" />
    <Compile Include="${name}Module.cs" />
    <Compile Include="${name}Package.cs" />
    <EmbeddedResource Include="Properties\\${name}.rd.xml" />
  </ItemGroup>
  <ItemGroup>
    <ProjectReference Include="$(ReactWindowsRoot)\\react-native-windows\\ReactWindows\\ReactNative\\ReactNative.csproj">
      <Project>{c7673ad5-e3aa-468c-a5fd-fa38154e205c}</Project>
      <Name>ReactNative</Name>
    </ProjectReference>
  </ItemGroup>
  <PropertyGroup Condition=" '$(VisualStudioVersion)' == '' or '$(VisualStudioVersion)' &lt; '14.0' ">
    <VisualStudioVersion>14.0</VisualStudioVersion>
  </PropertyGroup>
  <Import Project="$(MSBuildExtensionsPath)\\Microsoft\\WindowsXaml\\v$(VisualStudioVersion)\\Microsoft.Windows.UI.Xaml.CSharp.targets" />
  <!-- To modify your build process, add your task inside one of the targets below and uncomment it.
       Other similar extension points exist, see Microsoft.Common.targets.
  <Target Name="BeforeBuild">
  </Target>
  <Target Name="AfterBuild">
  </Target>
  -->
</Project>
`,
}, {
  name: ({ name }) => `${platform}/${name}/${name}Module.cs`,
  content: ({ name, namespace }) =>
`using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace ${namespace}.${name}
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class ${name}Module : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="${name}Module"/>.
        /// </summary>
        internal ${name}Module()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "${name}";
            }
        }
    }
}
`,
}, {
  name: ({ name }) => `${platform}/${name}/${name}Package.cs`,
  content: ({ name, namespace }) =>
`using ReactNative.Bridge;
using ReactNative.Modules.Core;
using ReactNative.UIManager;
using System;
using System.Collections.Generic;

namespace ${namespace}.${name}
{
    /// <summary>
    /// Package defining core framework modules (e.g., <see cref="UIManagerModule"/>).
    /// It should be used for modules that require special integration with
    /// other framework parts (e.g., with the list of packages to load view
    /// managers from).
    /// </summary>
    public class ${name}Package : IReactPackage
    {
        /// <summary>
        /// Creates the list of native modules to register with the react
        /// instance.
        /// </summary>
        /// <param name="reactContext">The react application context.</param>
        /// <returns>The list of native modules.</returns>
        public IReadOnlyList<INativeModule> CreateNativeModules(ReactContext reactContext)
        {
            return new List<INativeModule>
            {
                new ${name}Module(),
            };
        }

        /// <summary>
        /// Creates the list of JavaScript modules to register with the
        /// react instance.
        /// </summary>
        /// <returns>The list of JavaScript modules.</returns>
        public IReadOnlyList<Type> CreateJavaScriptModulesConfig()
        {
            return new List<Type>(0);
        }

        /// <summary>
        /// Creates the list of view managers that should be registered with
        /// the <see cref="UIManagerModule"/>.
        /// </summary>
        /// <param name="reactContext">The react application context.</param>
        /// <returns>The list of view managers.</returns>
        public IReadOnlyList<IViewManager> CreateViewManagers(
            ReactContext reactContext)
        {
            return new List<IViewManager>(0);
        }
    }
}
`,
}, {
  name: ({ name }) => `${platform}/${name}/Properties/${name}.rd.xml`,
  content: ({ name }) =>
`<?xml version="1.0" encoding="utf-8"?>
<!--
    This file contains Runtime Directives, specifications about types your application accesses
    through reflection and other dynamic code patterns. Runtime Directives are used to control the
    .NET Native optimizer and ensure that it does not remove code accessed by your library. If your
    library does not do any reflection, then you generally do not need to edit this file. However,
    if your library reflects over types, especially types passed to it or derived from its types,
    then you should write Runtime Directives.
    The most common use of reflection in libraries is to discover information about types passed
    to the library. Runtime Directives have three ways to express requirements on types passed to
    your library.
    1.  Parameter, GenericParameter, TypeParameter, TypeEnumerableParameter
        Use these directives to reflect over types passed as a parameter.
    2.  SubTypes
        Use a SubTypes directive to reflect over types derived from another type.
    3.  AttributeImplies
        Use an AttributeImplies directive to indicate that your library needs to reflect over
        types or methods decorated with an attribute.
    For more information on writing Runtime Directives for libraries, please visit
    http://go.microsoft.com/fwlink/?LinkID=391919
-->
<Directives xmlns="http://schemas.microsoft.com/netfx/2013/01/metadata">
  <Library Name="${name}">

  	<!-- add directives for your library here -->

  </Library>
</Directives>
`,
}, {
  name: ({ name }) => `${platform}/${name}/Properties/AssemblyInfo.cs`,
  content: ({ name }) =>
`using System.Reflection;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

// General Information about an assembly is controlled through the following
// set of attributes. Change these attribute values to modify the information
// associated with an assembly.
[assembly: AssemblyTitle("${name}")]
[assembly: AssemblyDescription("")]
[assembly: AssemblyConfiguration("")]
[assembly: AssemblyCompany("")]
[assembly: AssemblyProduct("${name}")]
[assembly: AssemblyCopyright("Copyright ©  2016")]
[assembly: AssemblyTrademark("")]
[assembly: AssemblyCulture("")]

// Version information for an assembly consists of the following four values:
//
//      Major Version
//      Minor Version
//      Build Number
//      Revision
//
// You can specify all the values or you can default the Build and Revision Numbers
// by using the '*' as shown below:
// [assembly: AssemblyVersion("1.0.*")]
[assembly: AssemblyVersion("1.0.0.0")]
[assembly: AssemblyFileVersion("1.0.0.0")]
[assembly: ComVisible(false)]
  `,
}];
