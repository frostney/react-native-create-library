/* eslint max-len: 0 */

module.exports = platform => [{
  name: ({ name }) => `${platform}/${name}.sln`,
  content: ({ name }) => `
Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio 14
VisualStudioVersion = 14.0.25123.0
MinimumVisualStudioVersion = 10.0.40219.1
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "${name}", "${name}\${name}.csproj", "{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}"
EndProject
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "ReactNative", "..\node_modules\react-native-windows\ReactWindows\ReactNative\ReactNative.csproj", "{C7673AD5-E3AA-468C-A5FD-FA38154E205C}"
EndProject
Global
	GlobalSection(SolutionConfigurationPlatforms) = preSolution
		Debug|Any CPU = Debug|Any CPU
		Debug|ARM = Debug|ARM
		Debug|x64 = Debug|x64
		Debug|x86 = Debug|x86
		Development|Any CPU = Development|Any CPU
		Development|ARM = Development|ARM
		Development|x64 = Development|x64
		Development|x86 = Development|x86
		Release|Any CPU = Release|Any CPU
		Release|ARM = Release|ARM
		Release|x64 = Release|x64
		Release|x86 = Release|x86
	EndGlobalSection
	GlobalSection(ProjectConfigurationPlatforms) = postSolution
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Debug|Any CPU.Build.0 = Debug|Any CPU
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Debug|ARM.ActiveCfg = Debug|ARM
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Debug|ARM.Build.0 = Debug|ARM
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Debug|x64.ActiveCfg = Debug|x64
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Debug|x64.Build.0 = Debug|x64
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Debug|x86.ActiveCfg = Debug|x86
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Debug|x86.Build.0 = Debug|x86
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Development|Any CPU.ActiveCfg = Development|Any CPU
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Development|Any CPU.Build.0 = Development|Any CPU
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Development|ARM.ActiveCfg = Development|ARM
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Development|ARM.Build.0 = Development|ARM
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Development|x64.ActiveCfg = Development|x64
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Development|x64.Build.0 = Development|x64
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Development|x86.ActiveCfg = Development|x86
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Development|x86.Build.0 = Development|x86
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Release|Any CPU.ActiveCfg = Release|Any CPU
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Release|Any CPU.Build.0 = Release|Any CPU
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Release|ARM.ActiveCfg = Release|ARM
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Release|ARM.Build.0 = Release|ARM
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Release|x64.ActiveCfg = Release|x64
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Release|x64.Build.0 = Release|x64
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Release|x86.ActiveCfg = Release|x86
		{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}.Release|x86.Build.0 = Release|x86
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|Any CPU.Build.0 = Debug|Any CPU
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|ARM.ActiveCfg = Debug|ARM
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|ARM.Build.0 = Debug|ARM
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|x64.ActiveCfg = Debug|x64
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|x64.Build.0 = Debug|x64
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|x86.ActiveCfg = Debug|x86
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Debug|x86.Build.0 = Debug|x86
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|Any CPU.ActiveCfg = Debug|Any CPU
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|Any CPU.Build.0 = Debug|Any CPU
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|ARM.ActiveCfg = Debug|ARM
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|ARM.Build.0 = Debug|ARM
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|x64.ActiveCfg = Debug|x64
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|x64.Build.0 = Debug|x64
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|x86.ActiveCfg = Debug|x86
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Development|x86.Build.0 = Debug|x86
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|Any CPU.ActiveCfg = Release|Any CPU
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|Any CPU.Build.0 = Release|Any CPU
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|ARM.ActiveCfg = Release|ARM
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|ARM.Build.0 = Release|ARM
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|x64.ActiveCfg = Release|x64
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|x64.Build.0 = Release|x64
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|x86.ActiveCfg = Release|x86
		{C7673AD5-E3AA-468C-A5FD-FA38154E205C}.Release|x86.Build.0 = Release|x86
	EndGlobalSection
	GlobalSection(SolutionProperties) = preSolution
		HideSolutionNode = FALSE
	EndGlobalSection
EndGlobal
  `,
}, {
  name: () => `${platform}/.gitignore`,
  content: () => `
*AppPackages*
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
  name: ({ name }) => `${platform}/${name}/project.json`,
  content: () => `
{
  "dependencies": {
    "Microsoft.NETCore.UniversalWindowsPlatform": "5.0.0"
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
  content: ({ name }) => `
<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="14.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <Import Project="$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props" Condition="Exists('$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props')" />
  <PropertyGroup>
    <Configuration Condition=" '$(Configuration)' == '' ">Debug</Configuration>
    <Platform Condition=" '$(Platform)' == '' ">AnyCPU</Platform>
    <ProjectGuid>{4ACDD44C-E556-423E-BD74-B4CEF3E67FF0}</ProjectGuid>
    <OutputType>Library</OutputType>
    <AppDesignerFolder>Properties</AppDesignerFolder>
    <RootNamespace>RNShare</RootNamespace>
    <AssemblyName>RNShare</AssemblyName>
    <DefaultLanguage>en-US</DefaultLanguage>
    <TargetPlatformIdentifier>UAP</TargetPlatformIdentifier>
    <TargetPlatformVersion>10.0.10586.0</TargetPlatformVersion>
    <TargetPlatformMinVersion>10.0.10240.0</TargetPlatformMinVersion>
    <MinimumVisualStudioVersion>14</MinimumVisualStudioVersion>
    <FileAlignment>512</FileAlignment>
    <ProjectTypeGuids>{A5A43C5B-DE2A-4C0C-9213-0A381AF9435A};{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}</ProjectTypeGuids>
    <ReactWindowsRoot>..\..\node_modules</ReactWindowsRoot>
  </PropertyGroup>
  <PropertyGroup Condition=" '$(Configuration)' != 'Development'">
    <ReactWindowsRoot>..\..</ReactWindowsRoot>
  </PropertyGroup>
  <PropertyGroup Condition=" '$(Configuration)|$(Platform)' == 'Debug|AnyCPU' ">
    <PlatformTarget>AnyCPU</PlatformTarget>
    <DebugSymbols>true</DebugSymbols>
    <DebugType>full</DebugType>
    <Optimize>false</Optimize>
    <OutputPath>bin\Debug\</OutputPath>
    <DefineConstants>DEBUG;TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <ErrorReport>prompt</ErrorReport>
    <WarningLevel>4</WarningLevel>
  </PropertyGroup>
  <PropertyGroup Condition=" '$(Configuration)|$(Platform)' == 'Release|AnyCPU' ">
    <PlatformTarget>AnyCPU</PlatformTarget>
    <DebugType>pdbonly</DebugType>
    <Optimize>true</Optimize>
    <OutputPath>bin\Release\</OutputPath>
    <DefineConstants>TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <ErrorReport>prompt</ErrorReport>
    <WarningLevel>4</WarningLevel>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Debug|x86'">
    <PlatformTarget>x86</PlatformTarget>
    <DebugSymbols>true</DebugSymbols>
    <OutputPath>bin\x86\Debug\</OutputPath>
    <DefineConstants>DEBUG;TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <NoWarn>;2008</NoWarn>
    <DebugType>full</DebugType>
    <PlatformTarget>x86</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Release|x86'">
    <PlatformTarget>x86</PlatformTarget>
    <OutputPath>bin\x86\Release\</OutputPath>
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
    <OutputPath>bin\ARM\Debug\</OutputPath>
    <DefineConstants>DEBUG;TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <NoWarn>;2008</NoWarn>
    <DebugType>full</DebugType>
    <PlatformTarget>ARM</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Release|ARM'">
    <PlatformTarget>ARM</PlatformTarget>
    <OutputPath>bin\ARM\Release\</OutputPath>
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
    <OutputPath>bin\x64\Debug\</OutputPath>
    <DefineConstants>DEBUG;TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <NoWarn>;2008</NoWarn>
    <DebugType>full</DebugType>
    <PlatformTarget>x64</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Release|x64'">
    <PlatformTarget>x64</PlatformTarget>
    <OutputPath>bin\x64\Release\</OutputPath>
    <DefineConstants>TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <Optimize>true</Optimize>
    <NoWarn>;2008</NoWarn>
    <DebugType>pdbonly</DebugType>
    <PlatformTarget>x64</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
  </PropertyGroup>
  <ItemGroup>
    <!-- A reference to the entire .Net Framework and Windows SDK are automatically included -->
    <None Include="project.json" />
  </ItemGroup>
  <ItemGroup>
    <Compile Include="Properties\AssemblyInfo.cs" />
    <Compile Include="RNShareModule.cs" />
    <Compile Include="RNSharePackage.cs" />
    <EmbeddedResource Include="Properties\RNShare.rd.xml" />
  </ItemGroup>
  <ItemGroup>
    <ProjectReference Include="..\..\node_modules\react-native-windows\ReactWindows\ReactNative\ReactNative.csproj">
      <Project>{c7673ad5-e3aa-468c-a5fd-fa38154e205c}</Project>
      <Name>ReactNative</Name>
    </ProjectReference>
  </ItemGroup>
  <PropertyGroup Condition=" '$(VisualStudioVersion)' == '' or '$(VisualStudioVersion)' &lt; '14.0' ">
    <VisualStudioVersion>14.0</VisualStudioVersion>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Development|AnyCPU'">
    <DebugSymbols>true</DebugSymbols>
    <OutputPath>bin\Development\</OutputPath>
    <DefineConstants>DEBUG;TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <NoStdLib>true</NoStdLib>
    <DebugType>full</DebugType>
    <PlatformTarget>AnyCPU</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
    <CodeAnalysisRuleSet>MinimumRecommendedRules.ruleset</CodeAnalysisRuleSet>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Development|x86'">
    <DebugSymbols>true</DebugSymbols>
    <OutputPath>bin\x86\Development\</OutputPath>
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
    <OutputPath>bin\ARM\Development\</OutputPath>
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
    <OutputPath>bin\x64\Development\</OutputPath>
    <DefineConstants>DEBUG;TRACE;NETFX_CORE;WINDOWS_UWP</DefineConstants>
    <NoWarn>;2008</NoWarn>
    <NoStdLib>true</NoStdLib>
    <DebugType>full</DebugType>
    <PlatformTarget>x64</PlatformTarget>
    <UseVSHostingProcess>false</UseVSHostingProcess>
    <ErrorReport>prompt</ErrorReport>
    <CodeAnalysisRuleSet>MinimumRecommendedRules.ruleset</CodeAnalysisRuleSet>
  </PropertyGroup>
  <Import Project="$(MSBuildExtensionsPath)\Microsoft\WindowsXaml\v$(VisualStudioVersion)\Microsoft.Windows.UI.Xaml.CSharp.targets" />
  <!-- To modify your build process, add your task inside one of the targets below and uncomment it.
       Other similar extension points exist, see Microsoft.Common.targets.
  <Target Name="BeforeBuild">
  </Target>
  <Target Name="AfterBuild">
  </Target>
  -->
</Project>
`,
}];
