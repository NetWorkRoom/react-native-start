@echo OFF
if "%~1" == "" (start "" /min "%comspec%" /c "%~f0" any_word & exit /b)
c:
cd c:\Users\%username%\AppData\Local\Android\sdk\tools
emulator @Nexus_5X_API_28_x86